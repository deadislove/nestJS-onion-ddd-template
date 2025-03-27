import { Exclude, Expose } from "class-transformer";

export class UserValueObject {
    @Exclude() id: number;
    @Expose() username: string;
    @Expose() email: string;

    @Expose() password: string;
}