import { List } from 'immutable';
import * as l from '../lock/index';

function setResendStatus(m, value) {
  // TODO: check value
  return m.set("resendStatus", value);
}

export function setResendSuccess(m) {
  return setResendStatus(m, "success");
}

export function resendSuccess(m) {
  return resendStatus(m) == "success";
}

export function setResendFailed(m) {
  return setResendStatus(m, "failed");
}

export function resendFailed(m) {
  return resendStatus(m) == "failed";
}

export function resendOngoing(m) {
  return resendStatus(m) == "ongoing";
}

export function resend(m) {
  if (resendAvailable(m)) {
    return setResendStatus(m, "ongoing");
  } else {
    return m;
  }
}

function resendStatus(m) {
  return m.get("resendStatus", "waiting");
}

export function resendAvailable(m) {
  return resendStatus(m) == "waiting" || resendStatus(m) == "failed";
}

export function reset(m, opts = {}) {
  let keyPaths = List([
    ["passwordlessStarted"],
    ["resendStatus"],
    ["selectingLocation"]
  ]);

  const { clearCred } = opts;

  if (!clearCred) {
    keyPaths = keyPaths.push(["cred"]);
  } else {
    const credKeyPaths = List(clearCred).map(x => ["cred", x]);
    keyPaths = keyPaths.concat(credKeyPaths);
  }

  m = keyPaths.reduce((r, v) => r.removeIn(v), m);

  return l.clearGlobalError(m);
}

export function send(m) {
  return m.getIn(["modeOptions", "send"], "link");
}

export function isSendLink(m) {
  return send(m) === "link";
}

export function openLocationSelect(m, searchStr) {
  m = m.set("selectingLocation", true);
  if (searchStr && typeof searchStr === "string") {
    m = m.set("initialLocationSearchStr", searchStr);
  }

  return m;
}

export function closeLocationSelect(m) {
  m = m.remove("selectingLocation");
  m = m.remove("initialLocationSearchStr");

  return m;
}

export function initialLocationSearchStr(m) {
  return m.get("initialLocationSearchStr", "");
}

export function selectingLocation(m) {
  return m.get("selectingLocation", false);
}

export function setPasswordlessStarted(m, value) {
  return m.set("passwordlessStarted", value);
}

export function passwordlessStarted(m) {
  return m.get("passwordlessStarted", false);
}

export function setSignedIn(m, value) {
  return m.set("signedIn", value);
}

export function signedIn(m) {
  return m.get("signedIn", false);
}
