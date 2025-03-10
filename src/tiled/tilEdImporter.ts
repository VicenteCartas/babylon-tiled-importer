import { Scene } from "@babylonjs/core";
import { TiledMap } from "./tilEd.types";
import { TiledParser } from "./tilEdParser";
import { FileUtilities } from "./fileUtilities";

export class TiledImporter {
    public static async ImportMapAsync(rootUrl: string, scene: Scene): Promise<TiledMap> {
        const url = new URL(rootUrl);
        const mapData = await FileUtilities.requestFile(url);
        const parser = new TiledParser();
        const mapObject = await parser.parseMapData(mapData, url, scene);
        return mapObject;
    }
}