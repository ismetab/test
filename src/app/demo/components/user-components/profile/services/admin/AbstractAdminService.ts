export abstract class AbstractAdminService  {
    private userId: number;

    setUserId(id: number) {
        this.userId = id;
    }

    protected getUserId(): number {
        return this.userId;
    }
}
