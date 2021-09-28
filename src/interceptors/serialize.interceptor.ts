import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { classToPlain, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { GqlExecutionContext } from '@nestjs/graphql';

export function Serialize(dto: any): any {
  return UseInterceptors(new GqlInterceptor(dto));
}

async function validateQueryInput(dto, args) {
  let errors;
  try {
    const argsEntries = Object.entries(args);
    const [key, input] = argsEntries[0];
    argsEntries[key] = plainToClass(dto, input);
    const arg = argsEntries[key];
    errors = await validate(arg);
    console.log(errors);
  } catch (error) {
    console.log(error);
    throw error;
  }
  if (errors.length > 0) {
    throw new BadRequestException(errors);
  }
}

function transformInput(request) {
  request.body = classToPlain(request.body, {
    excludeExtraneousValues: true,
  });
}

export class GqlInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  async intercept(
    context: ExecutionContext,
    handler: CallHandler,
  ): Promise<Observable<any>> {
    const ctx = GqlExecutionContext.create(context);
    const args = ctx.getArgs();
    console.log(`gqlctx: ${JSON.stringify(args)}`);

    /* Validate */
    await validateQueryInput(this.dto, args);
    /* transform */
    transformInput(args);

    return handler.handle().pipe(
      map((data: any) => {
        console.log('Running after the handler', data);
        const res = classToPlain(data, {
          excludeExtraneousValues: true,
        });
        console.log(`res: ${JSON.stringify(res)}`);
        return res;
      }),
    );
  }
}
