import {ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus} from "@nestjs/common";
import { Request, Response } from 'express'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        let statusCode: number;
        let message: string | object;

        if (exception instanceof HttpException) {
            statusCode = exception.getStatus();
            const exceptionResponse = exception.getResponse();

            message = typeof exceptionResponse === 'object' && exceptionResponse !== null
                ? (exceptionResponse as any).message || exceptionResponse
                : exceptionResponse;
        } else {
            console.error('Unhandled Exception:', exception);
            statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
            message = 'Internal server error';
        }

        response.status(statusCode).json({
            statusCode,
            message,
            path: request.url,
            timestamp: new Date().toISOString(),
        })
    }
}