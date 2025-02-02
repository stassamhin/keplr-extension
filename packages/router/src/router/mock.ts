import { Router } from "./types";
import { MessageSender } from "../types";
import { Result } from "../interfaces";
import { EventEmitter } from "events";
import { isError } from "../utils";

export class MockRouter extends Router {
  public static eventEmitter = new EventEmitter();

  listen(port: string): void {
    if (!port) {
      throw new Error("Empty port");
    }

    this.port = port;
    MockRouter.eventEmitter.addListener("message", this.onMessage);
  }

  unlisten(): void {
    this.port = "";
    MockRouter.eventEmitter.removeListener("message", this.onMessage);
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
      if (e && isError(e)) {
        console.log(
          `Failed to process msg ${message.type}: ${
            e?.message || e?.toString()
          }`
        );

        sender.resolver({
          error: e.message || e.toString(),
        });
      } else {
        sender.resolver({
          error: "Unknown error, and error is null",
        });
      }
    }
  };
}
