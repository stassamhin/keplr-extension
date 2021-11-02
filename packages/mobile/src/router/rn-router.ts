import {
  EnvProducer,
  MessageSender,
  Result,
  Router,
} from "@keplr-wallet/router";

import EventEmitter from "eventemitter3";
import { isError } from "../utils";

export class RNRouterBase extends Router {
  constructor(
    protected readonly envProducer: EnvProducer,
    protected readonly eventEmitter: EventEmitter
  ) {
    super(envProducer);
  }

  listen(port: string): void {
    if (!port) {
      throw new Error("Empty port");
    }

    this.port = port;
    this.eventEmitter.addListener("message", this.onMessage);
  }

  unlisten(): void {
    this.port = "";
    this.eventEmitter.removeListener("message", this.onMessage);
  }

  protected onMessage = async (params: {
    message: any;
    sender: MessageSender & {
      resolver: (result: Result) => void;
    };
  }): Promise<void> => {
    const { message, sender } = params;
    if (message.port !== this.port) {
      return;
    }

    try {
      const result = await this.handleMessage(message, sender);
      sender.resolver({
        return: result,
      });
      return;
    } catch (e) {
      console.log(
        `Failed to process msg ${message.type}: ${
          isError(e) ? e.message : String(e)
        }`
      );
      if (e) {
        sender.resolver({
          error: isError(e) ? e.message : String(e),
        });
      } else {
        sender.resolver({
          error: "Unknown error, and error is null",
        });
      }
    }
  };
}

export class RNRouterBackground extends RNRouterBase {
  public static readonly EventEmitter: EventEmitter = new EventEmitter();

  constructor(protected readonly envProducer: EnvProducer) {
    super(envProducer, RNRouterBackground.EventEmitter);
  }
}

export class RNRouterUI extends RNRouterBase {
  public static readonly EventEmitter: EventEmitter = new EventEmitter();

  constructor(protected readonly envProducer: EnvProducer) {
    super(envProducer, RNRouterUI.EventEmitter);
  }
}
