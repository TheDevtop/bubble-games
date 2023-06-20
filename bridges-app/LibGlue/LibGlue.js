import { faL } from '@fortawesome/free-solid-svg-icons';
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

export function PushChat(mesg, targetUser) {
  const ah = new AuthHeader(GlueStore.User, GlueStore.Password);
  const mf = new MessageForm(ah, targetUser, GlueStore.User, mesg);
  const headers = {
    'Content-Type': 'application/json'
  }
  const url = baseURL + "/chat/send";
  const body = JSON.stringify(mf);

  axios.post(url, body, { "headers": headers })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function PullChats() {
  const headers = {
    'Content-Type': 'application/json'
  }
  const url = baseURL + "/chat/receive";
  const body = JSON.stringify(new AuthHeader(GlueStore.User, GlueStore.Password));

  var messages = [];

  axios.post(url, body, { "headers": headers })
    .then(function (response) {
      const rf = response.data;
      if (rf.Status.Code == 0) {
        GlueStore.Messages = rf.Messages;
      }
    })
    .catch(function (error) {
      console.error(error);
    });

  return messages;
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