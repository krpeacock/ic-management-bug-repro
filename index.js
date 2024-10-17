import { HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { ICManagementCanister } from "@dfinity/ic-management";

const agent = HttpAgent.createSync({ host: "https://icp-api.io" });

const ic = ICManagementCanister.create({ agent });

  const status = await ic.canisterStatus(Principal.from("tnnnb-2yaaa-aaaab-qaiiq-cai"));
  console.log(status);

