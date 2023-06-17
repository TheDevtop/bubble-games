import axios from 'axios';
export const baseURL = "http://145.220.74.171:5000";

// This store contains all session state
export var GlueStore = {
    User: String,
    Password: String,
    Cards: Array,
    CardsLoaded: Boolean,
    Messages: Array,
    MessagesLatest: Boolean
};

export class AuthHeader {
    constructor(u, p) {
        this.Username = u;
        this.Password = p;
    }
}

export class MessageForm {
    constructor(hdr, tu, su, mc) {
        this.Header = hdr;
        this.TargetUser = tu;
        this.SourceUser = su;
        this.MessageContent = mc;
    }
}

export class StatusForm {
    constructor(code, message) {
        this.Code = code;
        this.Message = message;
    }
}

export function PullQuotes(n) {
    var quotes = new Array();
    axios.get("https://type.fit/api/quotes", { withCredentials: false}).then(function(response) {
        for (var i = 0; i < n; i++) {
            var r = Math.floor(Math.random() * response.data.length);
            quotes.push(response.data[r].text);
        }
        return quotes;
    });
    return quotes;
}