export interface ClientOptions {
  id?: ClientID
  url: string
}

export interface PeerOptions {
  id: ClientID
  url: string
}

export namespace Message {
  export type ClientToServer = Join | Leave

  export interface Join {
    type: 'Join'
    keys: DocumentID[]
  }

  export interface Leave {
    type: 'Leave'
    keys: DocumentID[]
  }

  export type ServerToClient = Introduction

  export interface Introduction {
    type: 'Introduction'
    id: ClientID // the other peer we're introducing this client to
    keys: DocumentID[]
  }
}

export type ClientID = string

export type DocumentID = string
