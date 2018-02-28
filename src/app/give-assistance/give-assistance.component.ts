import { Component, OnInit, ElementRef, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { TestService } from '../test.service';

@Component({
    selector: 'app-give-assistance',
    templateUrl: './give-assistance.component.html',
    styleUrls: ['./give-assistance.component.css']
})
export class GiveAssistanceComponent implements OnInit {

    complexForm: FormGroup;
    flights;
    data;
    @ViewChild(AlertComponent, { read: ViewContainerRef }) container;
    componentRef: ComponentRef<any>;
    // options;
    constructor(private fb: FormBuilder, private ts: TestService, private resolver: ComponentFactoryResolver) {
        this.createForm();

    }
    ngOnInit() {
        this.defaultValues();


    }
    options;

    createForm() {
        this.complexForm = this.fb.group({
            from: [null, [Validators.required, Validators.minLength(3)]],
            to: [null, [Validators.required, Validators.minLength(3)]],
            name: 'asda',
            email: ['', [Validators.required, Validators.email]],
            tel: "",
            message: "",
            flights: this.fb.array([this.createItem()]),
            date: new Date()
        });

        this.complexForm.get('from').valueChanges
            .debounceTime(400)
            .subscribe(val => {
                this.ts.postService({ 'city': val }).subscribe(data => {
                    this.options = data;

                },
                    err => console.error(err),
                    () => console.log('Flights selected')
                );
            });

        this.complexForm.get('to').valueChanges
            .debounceTime(400)
            .subscribe(val => {

                if (val.length > 2) {

                    this.ts.postService({ 'city': val }).subscribe(data => {
                        this.options = data;
                        console.log(this.options);

                        //this.options= this.filterStates(data)
                    },
                        err => console.error(err),
                        () => console.log('Flights selected')
                    );
                }
            });


    }

    get formData() {
        return <FormArray>this.complexForm.controls['flights'];
    }
    createItem(): FormGroup {
        return this.fb.group({
            flightNumber: ['', [Validators.required]]
        });
    }
    addItem(): void {

        //this.flights = this.complexForm.get('flights') as FormArray;
        //this.flights.push(this.createItem());

        this.flights = <FormArray>this.complexForm.controls['flights'];
        this.flights.push(this.createItem());
    }

    get removeflights(): FormArray {
        return this.complexForm.get('flights') as FormArray;
    }

    delete(msg) {
        this.removeflights.removeAt(msg);
    }
    reset(form: FormGroup) {
        form.reset();
    }


    defaultValues() {
        this.complexForm.patchValue({ 'name': 'test' });
    }
    submitForm(form: FormGroup) {
        console.log(form.value);
        if (this.complexForm.valid) {
            console.log('form submitted');

            this.ts.saveAssistance(form.value).subscribe(data => {
                //this.options= this.filterStates(data)
                this.complexForm.reset();
                this.complexForm.markAsPristine();
                this.complexForm.markAsUntouched();
            },
                err => console.error(err),
                () => console.log('save assistance completed')
            );
            //this.createComponent("success");
        }
        else {
            // validate all form fields
        }


    }

    createComponent(type) {
        console.log('hello');


        //const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);
        //this.componentRef = this.container.createComponent(factory);
        //this.componentRef.instance.type = type;
        //this.componentRef.instance.output.subscribe(event => console.log(event));

    }
}
