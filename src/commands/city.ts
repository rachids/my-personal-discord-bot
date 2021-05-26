import { getInfosForCity } from "../services/teleport.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: `city`,
  description: "Donnes des infos sur la première ville qui correspond.",
  arguments: [
    {
      name: "city",
      type: "string",
      missing: (message) => {
        message.reply(":thinking: Il manquerait pas le nom de la ville par hasard ?");
      },
    },
  ],
  execute: async function (message, args) {
    let infos = await getInfosForCity(args.city);

    message.reply(
      `Tu savais que *` + infos.name + `* compte pas moins de *` + infos.population + `* habitants ?! La dinguerie.`
    );
  },
});
