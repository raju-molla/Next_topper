import { NestMiddleware } from "@nestjs/common";

export class TestMiddlware  implements NestMiddleware{
    use(req: Request, res: any, next: (error?: any) => void) {
        throw new Error("Method not implemented.");
    }
    
}