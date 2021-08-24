declare namespace WS {
  export interface To {
    /** Add a friend, by username, by sending an outgoing request or accepting an incoming request. */
    'ADD_FRIEND': WS.Params.AddFriend;
    /** Create a channel in a guild. */
    'CHANNEL_CREATE': WS.Params.ChannelCreate;
    /** Delete a channel in a guild. */
    'CHANNEL_DELETE': WS.Params.ChannelDelete;
    /** Create a guild. */
    'GUILD_CREATE': WS.Params.GuildCreate;
    /** Delete a guild. */
    'GUILD_DELETE': WS.Params.GuildDelete;
    /** Accept a guild invite. */
    'GUILD_MEMBER_ADD': WS.Params.GuildMemberAdd;
    /** Remove a member from a guild. */
    'GUILD_MEMBER_REMOVE': WS.Params.GuildMemberRemove;
    /** Update a members roles or other properties on a member. */
    'GUILD_MEMBER_UPDATE': WS.Params.GuildMemberUpdate;
    /** Create a role in a guild. */
    'GUILD_ROLE_CREATE': WS.Params.GuildRoleCreate;
    /** Delete a role in a guild. */
    'GUILD_ROLE_DELETE': WS.Params.GuildRoleDelete;
    /** Update a guild role permissions or other properties. */
    'GUILD_ROLE_UPDATE': WS.Params.GuildRoleUpdate;
    /** Update the settings of a guild. */
    'GUILD_UPDATE': WS.Params.GuildUpdate;
    /** Create an invite in a guild */
    'INVITE_CREATE': WS.Params.InviteCreate;
    /** Delete an existing invite in a guild. */
    'INVITE_DELETE': WS.Params.InviteDelete;
    /** Create a message in a text-based channel. */
    'MESSAGE_CREATE': WS.Params.MessageCreate;
    /** Delete an existing message in a text-based channel. */
    'MESSAGE_DELETE': WS.Params.MessageDelete;
    /** Update an existing message in a text-based channel. */
    'MESSAGE_UPDATE': WS.Params.MessageUpdate;
    /** Bootstrap your websocket client to be able to use other websocket events.
     * - Associate ws client ID with user ID.
     * - Join user rooms.
     * - Set online status. */
    'READY': WS.Params.Ready;
    /** Cancel a friend request, or remove an existing friend. */
    'REMOVE_FRIEND': WS.Params.RemoveFriend;
    /** Indicate that you are typing in a text-based channel. */
    'TYPING_START': WS.Params.TypingStart;
    /** Delete a user with a given token. */
    'USER_DELETE': WS.Params.UserDelete;
    /** Update a user with a given token. */
    'USER_UPDATE': WS.Params.UserUpdate;
  }

  export interface On {
    /** Manually disconnect from the websocket; logout. */
    'disconnect': any;
  }
  
  /** WS Args are what is received from the websocket. */
  export interface From {
    /** Called after you sent an outgoing friend request, or of an incoming friend request. */
    'ADD_FRIEND': WS.Args.AddFriend;
    /** Called when a guild channel is created. */
    'CHANNEL_CREATE': WS.Args.ChannelCreate;
    /** Callled when a guild channel is deleted. */
    'CHANNEL_DELETE': WS.Args.ChannelDelete;
    /** Called when a guild is deleted, or the client leaves a guild. */
    'GUILD_DELETE': WS.Args.GuildDelete;
    /** Called when the client joins a guild. */
    'GUILD_CREATE': WS.Args.GuildCreate;
    /** Called when someone joins a guild by an invite, a bot is added, or the client joins guild. */
    'GUILD_MEMBER_ADD': WS.Args.GuildMemberAdd;
    /** Called when a guild member is removed, or leaves the guild. */
    'GUILD_MEMBER_REMOVE': WS.Args.GuildMemberRemove;
    /** Called when member roles are updated, or other properties. */
    'GUILD_MEMBER_UPDATE': WS.Args.GuildMemberUpdate;
    /** Called when a guild role is created. */
    'GUILD_ROLE_CREATE': WS.Args.GuildRoleCreate;
    /** Called when a guild role is deleted. */
    'GUILD_ROLE_DELETE': WS.Args.GuildRoleDelete;
    /** Called when properties on a guild role are updated. */
    'GUILD_ROLE_UPDATE': WS.Args.GuildRoleUpdate;
    /** Called when guild settings are updated. */
    'GUILD_UPDATE': WS.Args.GuildUpdate;
    /** Called when a guild invite is created. */
    'INVITE_CREATE': WS.Args.InviteCreate;
    /** Called when an existing guild invite is deleted. */
    'INVITE_DELETE': WS.Args.InviteDelete;
    /** Called when a message is created in a text-based channel. */
    'MESSAGE_CREATE': WS.Args.MessageCreate;
    /** Called when a message is deleted in a text-based channel. */
    'MESSAGE_DELETE': WS.Args.MessageDelete;
    /** Called when an existing message is updated in a text-based channel. */
    'MESSAGE_UPDATE': WS.Args.MessageUpdate;
    /** Called when a message is sent in a channel you are not ignoring. */
    'PING': WS.Args.Ping;
    /** Called when a user goes online or offline. */
    'PRESENCE_UPDATE': WS.Args.PresenceUpdate;
    /** Called when the websocket accepts that you are ready. */
    'READY': WS.Args.Ready;
    /** Called when you are removed as a friend, or you remove a friend request, or an existing friend. */
    'REMOVE_FRIEND': WS.Args.RemoveFriend;
    /** Called when someone is typing in a text-based channel. */
    'TYPING_START': WS.Args.TypingStart;
    /** Called the client user is deleted. */
    'USER_DELETE': {};
    /** Called the client user settings are updated. */
    'USER_UPDATE': WS.Args.UserUpdate;
    /** Called when a websocket message is sent. */
    'error': object;
  }
  
  export namespace Params {
    export interface AddFriend {
      /** Username of user (case insensitive). */
      username: string;
    }
    export interface ChannelCreate {
      guildId: string;
      name: string;
    }
    export interface ChannelDelete {
      /** ID of the channel to delete. */
      channelId: string;
    }
    export interface GuildCreate {
      /** Name of the guild. */
      name: string;
    }
    export interface GuildDelete {
      guildId: string;
    }
    export interface GuildMemberAdd {
      inviteCode: string;
    }
    export interface GuildMemberRemove {
      /** ID of the guild. */
      guildId: string;
      /** ID of the member, not the same as a user ID. */
      memberId: string;
    }
    export interface GuildMemberUpdate {
      /** ID of the member, not the same as a user ID. */
      memberId: string;
    }
    export interface GuildRoleCreate {
      guildId: string;
    }
    export interface GuildRoleDelete {
      roleId: string;
      guildId: string;
    }
    export interface GuildRoleUpdate {
      roleId: string;
      guildId: string;
    }
    export interface GuildUpdate {
      guildId: string;
      name: string;
      iconURL: string;
    }
    export interface InviteCreate {
      guildId: string;
      options: InviteTypes.Options;
    }
    export interface InviteDelete {
      inviteCode: string;
    }
    export interface MessageCreate {
      channelId: string;
      content: string;
    }
    export interface MessageDelete {
      messageId: string;
    }
    export interface MessageUpdate {
      messageId: string;
      content?: string;
      withEmbed: boolean;
    }
    export interface MessageCreate {
      content: string;
    }
    export interface Ready {
      token: string;
    }
    export interface RemoveFriend {
      friendId: string;
    }
    export interface TypingStart {
      channelId: string;
    }
    export interface UserDelete {
      token: string;
    }
    export interface UserUpdate {
      avatarURL?: string;
      username?: string;
      token: string;
    }
  }
  
  export namespace Args {
    export interface AddFriend {
      /** The recipient who received the friend request. */
      friend: Entity.User;
      /** User who sent or accepted the friend request. */
      sender: Entity.User;
      /** Only available if both users add each other as a friend.  */
      dmChannel?: ChannelTypes.DM;
    }
    /**  */
    export interface ChannelCreate {
      /** ID of guild that channel is in. */
      guildId: string;
      /** The full object fo the channel that was created. */
      channel: Entity.Channel;
      /** ID of the user that created the channel. */
      creatorId: string;
    }
    export interface ChannelDelete {
      /** ID of guild that channel is in. */
      guildId: string;
      /** The ID of the channel that is deleted. */
      channelId: string;
    }
    export interface GuildCreate {
      /** The full object of the guild that was joined. */
      guild: Entity.Guild;
    }
    export interface GuildDelete {
      /** ID of the guild that was left. */
      guildId: string;
    }
    export interface GuildDelete {
      /** ID of the guild. */
      guildId: string;
    }
    /** Called when a member accepts an invite, or a bot was added to a guild. */
    export interface GuildMemberAdd {
      /** ID of the guild. */
      guildId: string;
      /** Full object of the member that was added to the guild. */
      member: Entity.GuildMember;
    }
    export interface GuildMemberRemove {
      /** ID of the guild. */
      guildId: string;
      /** ID of member that was removed. */
      memberId: string;
    }
    export interface GuildMemberUpdate {
      /** ID of the guild. */
      guildId: string;
      /** Properties of updated guild member. */
      partialMember: PartialEntity.GuildMember;
      /** ID of the guild member. Not the same as a user ID. */
      memberId: string;
    }
    export interface GuildRoleCreate {
      /** ID of the guild. */
      guildId: string;
      /** Full object of the role that was created. */
      role: Entity.Role;
    }
    export interface GuildRoleDelete {
      /** ID of the guild. */
      guildId: string;
      /** The ID of the role that was deleted. */
      roleId: string;
    }
    export interface GuildRoleUpdate {
      /** Guild ID associated with role. */
      guildId: string;
      /** Properties to update the role. */
      partialRole: PartialEntity.Role;
      /** The ID of the role that was updated. */
      roleId: string;
    }
    export interface GuildUpdate {
      /** ID of the guild. */
      guildId: string;
      /** Properties to update a guild. */
      partialGuild: PartialEntity.Guild;
    }
    export interface InviteCreate {
      /** ID of the guild. */
      guildId: string;
      /** Full object of the invite. */
      invite: Entity.Invite;
    }
    /** Called when a guild invite is delted. */
    export interface InviteDelete {
      /** ID of the guild. */
      guildId: string;
      /** The ID or the code of the invite. */
      inviteCode: string;
    }
    export interface MessageCreate {
      /** Full object of the message that was created. */
      message: Entity.Message;
    }
    export interface MessageDelete {
      /** ID of the channel with the message. */
      channelId: string;
      /** The ID of the message that was deleted. */
      messageId: string;
    }
    export interface MessageUpdate {
      /** Full object of the message that was updated. */
      message: Entity.Message;
    }
    export interface Ping {
      channelId: string;
      guildId?: string;
    }
    export interface PresenceUpdate {
      userId: string;
      status: UserTypes.StatusType;
    }
    export interface Ready {
      user: UserTypes.Self;
    }
    export interface RemoveFriend {
      friend: Entity.User;
      sender: Entity.User;
    }
    export interface TypingStart {
      channelId: string;
      userId: string;
    }
    export interface UserDelete {
      userId: string;
    }
    /** PRIVATE - contains private data */
    export interface UserUpdate {
      userId: string;
      partialUser: PartialEntity.User;
    }
  }
}

/** Partial classes involved in updating things.
 * Some properties (e.g. id) cannot be updated.
 * 
 * **Tip**: Only provide what properties are being updated. */
export namespace PartialEntity {
  export type Application = Partial<Entity.App>;
  export type Channel = Partial<Entity.Channel>;
  export type Guild = Partial<Entity.Guild>;
  export type GuildMember = Partial<Entity.GuildMember>;
  export type Message = Partial<Entity.Message>;
  export type Role = Partial<Entity.Role>;
  export type User = Partial<UserTypes.Self>;
}