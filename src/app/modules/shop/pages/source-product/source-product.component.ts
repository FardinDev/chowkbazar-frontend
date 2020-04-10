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
    // updating = false;
    model = new SourceProduct();

    constructor(
    
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
                //   console.log(event.target.result);
                   this.previews.push(event.target.result); 
   
                   this.model.images = this.previews;
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
        
         console.log('====================================');
         console.log(form.value);
         console.log('====================================');

      }

}
