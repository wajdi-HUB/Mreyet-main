import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  brands :any = [];

  constructor(private brandHttpService: BrandService,
    private pictureHttpService: PictureService,
   ) { }

  ngOnInit() {

    this.brandHttpService.getBrands().subscribe(res => {
        this.brands = res.data; 
         console.log(res.data)
    
        for(var i=0; i< res.data.length;i++)
        {
               console.log(res.data[i])
        }
      },
      err => console.log(err)
    );
  }

}
