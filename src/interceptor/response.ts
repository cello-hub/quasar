import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
  HttpStatus
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import _ from 'lodash'

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        code: _.get(data, 'code', HttpStatus.OK),
        message: _.get(data, 'message', 'OK'),
        data
      }))
    )
  }
}
