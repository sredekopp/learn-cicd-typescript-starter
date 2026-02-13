import { IncomingHttpHeaders } from "http";
import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("api", () => {
  test("parse authorization header", () => {
    const testKey = "TestKey";
    const headers: IncomingHttpHeaders = {
      authorization: `ApiKey ${testKey}`,
    };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toEqual(testKey);
  });
});
