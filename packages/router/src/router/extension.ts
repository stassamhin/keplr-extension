import { Router } from "./types";
import { MessageSender } from "../types";
import { Result } from "../interfaces";
import { isError } from "../utils";

export class ExtensionRouter extends Router {
  listen(port: string): void {
    if (!port) {
      throw new Error("Empty port");
    }

    this.port = port;
    browser.runtime.onMessage.addListener(this.onMessage);
    // Although security considerations cross-extension communication are in place,
    // we have put in additional security measures by disbling extension-to-extension communication until a formal security audit has taken place.
    /*
    if (browser.runtime.onMessageExternal) {
      browser.runtime.onMessageExternal.addListener(this.onMessage);
    }
     */
  }

  unlisten(): void {
    this.port = "";
    browser.runtime.onMessage.removeListener(this.onMessage);
    // Although security considerations cross-extension communication are in place,
    // we have put in additional security measures by disbling extension-to-extension communication until a formal security audit has taken place.
    /*
    if (browser.runtime.onMessageExternal) {
      browser.runtime.onMessageExternal.removeListener(this.onMessage);
    }
     */
  }

  // You shouldn't set this handler as async funtion,
  // because mozila's extension polyfill deals with the message handler as resolved if it returns the `Promise`.
  // So, if this handler is async function, it always return the `Promise` if it returns `undefined` and it is dealt with as resolved.
  protected onMessage = (
    message: any,
    sender: MessageSender
  ): Promise<Result> | undefined => {
    if (message.port !== this.port) {
      return;
    }

    return this.onMessageHandler(message, sender);
  };

  protected async onMessageHandler(
    message: any,
    sender: MessageSender
  ): Promise<Result> {
    try {
      const result = await this.handleMessage(message, sender);
      return {
        return: result,
      };
    } catch (e) {
      if (e && isError(e)) {
        console.log(
          `Failed to process msg ${message.type}: ${
            e?.message || e?.toString()
          }`
        );

        return Promise.resolve({
          error: e.message || e.toString(),
        });
      } else {
        return Promise.resolve({
          error: "Unknown error, and error is null",
        });
      }
    }
  }
}
