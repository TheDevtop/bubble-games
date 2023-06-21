import axios from 'axios';
export const baseURL = "http://145.220.74.171:5000";

// This store contains all session state
export var GlueStore = {
  User: "",
  Password: "",
  Cards: [],
  CardsLoaded: false,
  Messages: [],
  MessagesLatest: false
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
    this.From = su;
    this.To = tu;
    this.Content = mc;
  }
}

export class StatusForm {
  constructor(code, message) {
    this.Code = code;
    this.Message = message;
  }
}

export function ProtoMessage() {
  var m = {
    From: "",
    To: "",
    Content: ""
  };
  return m;
}

export function PushChat(mesg, targetUser) {
  const ah = new AuthHeader(GlueStore.User, GlueStore.Password);
  const mf = new MessageForm(ah, targetUser, GlueStore.User, mesg);
  const headers = {
    'Content-Type': 'application/json'
  }
  const url = baseURL + "/chat/send";
  const body = JSON.stringify(mf);

  console.log(body);
  axios.post(url, body, { "headers": headers })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

export async function PullChats() {
  const headers = {
    'Content-Type': 'application/json'
  }
  const url = baseURL + "/chat/receive";
  const body = JSON.stringify(new AuthHeader(GlueStore.User, GlueStore.Password));
  const resp = await axios.post(url, body, { "headers": headers });
  const rf = resp.data;

  if (rf.Status.Code == 0) {
    GlueStore.Messages = rf.Messages;
    GlueStore.MessagesLatest = true;

    console.log("Loaded chat messages.");
  } else {
    console.warn("Could not load chat messages!");
  }
  return;
}

export function PullQuotes(n) {
  var quotes = new Array();
  axios.get("https://type.fit/api/quotes", { withCredentials: false }).then(function (response) {
    for (var i = 0; i < n; i++) {
      var r = Math.floor(Math.random() * response.data.length);
      quotes.push(response.data[r].text);
    }
    return quotes;
  });
  return quotes;
}