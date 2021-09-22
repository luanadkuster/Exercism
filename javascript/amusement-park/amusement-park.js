/// <reference path="./global.d.ts" />
// @ts-check


export function createVisitor(name, age, ticketId) {
  const newVisitor = {
    name,
    age,
    ticketId
  };
  return newVisitor
};


export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor
};


export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === null) return 'not sold'
  if (tickets[ticketId] === undefined) return 'unknown ticket id'
  else return 'sold to ' + tickets[ticketId]
};


export function simpleTicketStatus(tickets, ticketId) {
  
  if (tickets[ticketId] == null) return 'invalid ticket !!!'
  else return tickets[ticketId]
  
};


export function gtcVersion(visitor) {
  if (visitor.gtc == undefined) return
  if (visitor.gtc.version == null) return
  else return visitor.gtc.version
};
