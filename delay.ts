const DEFAULT_TIMEOUT = 2000;
const DEFAULT_TIMEOUT_MESSAGE = "delay done!";

export default function timeout(argObject: {
  promise: Promise<any>;
  duration?: number;
  message?: string;
}): Promise<void> {
  const {
    promise,
    duration = DEFAULT_TIMEOUT,
    message = DEFAULT_TIMEOUT_MESSAGE,
  } = argObject;

  const timer = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(message));
    }, duration);
  });
  return new Promise((resolve, reject) => {
    Promise.race([promise, timer]).then(
      (...results) => resolve(...results),
      (err) => reject(err)
    );
  });
}

// useful for testing failing async fns
export function delay(
  time: number = 2000,
  shouldFail?: boolean
): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        return reject(new Error("timeout"));
      }
      resolve(`delay resolved after expected ${time / 1000} seconds`);
    }, time);
  });
}
