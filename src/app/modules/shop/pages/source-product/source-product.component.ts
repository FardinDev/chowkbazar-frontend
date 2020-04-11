import { ToastrService } from 'ngx-toastr';
import { ShopService } from './../../../../shared/api/shop.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


export class SourceProduct{
    public name: string;
    public phoneOrEmail: string;
    public productName: string;
    public productQuantity: string;
    public productDescription: string;
    public alibabaUrl: string|null;
    public images: any[];
   
  }

@Component({
    selector: 'app-source-product',
    templateUrl: './source-product.component.html',
    styleUrls: ['./source-product.component.scss']
})
export class SourceProductComponent implements OnInit, OnDestroy {

previews = [];
    submitted = false;
    maximumImages = 5;

    model = new SourceProduct();

    constructor(
    private shop: ShopService,
    private toastr: ToastrService
    ) { }

    ngOnInit(): void {
     
    }

    ngOnDestroy(): void {

    }

onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
  
                
                var reader = new FileReader();
   
                reader.onload = (event:any) => {

                    if (this.previews.length < this.maximumImages) {

                        this.previews.push(event.target.result); 

                    }
                }
  
                reader.readAsDataURL(event.target.files[i]);
    
        }
    }
  }

  clearImages(){
      this.previews = [];
      this.model.images = [];
  }

    onSubmit(form) {
        this.submitted = true;

        form.value['alibabaUrl'] ? form.value['alibabaUrl'] : form.value['alibabaUrl'] = '';
        form.value['images'] = this.previews ;

        // console.log(form.value);

        this.shop.storeSourceProduct(form.value).subscribe(res => {
            if (res.status == 'success') {
                this.toastr.success(`Your request is submitted! We will contact you at the given contact info. Thanks`);
                form.reset();
                this.previews = [];
                form.submitted = false;
                this.submitted = false;
             }else{
                this.toastr.error(`Your request is not submitted! Try reloading and submit again. Thanks`);
             }
        });






      }

}
