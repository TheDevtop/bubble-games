export class AuthHeader {
    constructor(u, p) {
        this.Username = u;
        this.Password = p;
    }
}

export class MessageForm {
    constructor(hdr, tu) {
        this.Header = hdr;
        this.TargetUser = tu;
    }
}
