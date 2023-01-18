import { picture } from "./picture";
import { store } from "./store";
import { brand } from "./brand";

export class article {
  // @ts-ignore
  constructor();
  constructor(
    public id: number,
    public Nom: string,
    public Desc: string,
    public ArticleShortId: number,
    public Discount: number,
    public MinPrice: number,
    public MaxPrice: number,
    public Pictures: any[]=[],
    public Tags: [],
    public BrandId: number,
    public StoreId: number,
    public Visibility: number,
    public Price: number,
    public Reference: number,
    public Budget:Object

    ) {}
}
