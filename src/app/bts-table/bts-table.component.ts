import { Component, OnInit, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-bts-table',
  templateUrl: './bts-table.component.html',
  styleUrls: ['./bts-table.component.css']
})
export class BtsTableComponent implements OnInit {

	@Input()
	private _tblHeaders: string[]
	get tblHeaders(): string[] { return this._tblHeaders }
	set tblHeaders(value: string[]) {
		this._tblHeaders = value
	}
	@Input()
	private _tblData: Array<any>
	get tblData(): Array<any> { return this._tblData }
	set tblData(value: Array<any>) {
		this._tblData = value
	}
	@Input()
	private _pageIndex: number = 0
	get pageIndex(): number { return this._pageIndex }
	set pageIndex(value: number) {
		this._pageIndex = value
	}
	@Input()
	private _pageSize?: number
	get pageSize(): number { return this._pageSize ? this._pageSize : this._tblData.length }
	set pageSize(value: number) {
		this._pageSize = value
	}
  constructor() { }

  ngOnInit(): void {}
	ngOnChanges(): void {
		console.log(
			`Loaded page:${this.pageIndex} with ${this.pageSize} rows`
		)
	}

	getDataPage(): Array<any>{
		if(this.tblData){
			const start = this.pageIndex * this.pageSize
			const end = start + this.pageSize
			const maxItemIndex = this.tblData.length
			if(start < maxItemIndex){
				return this.tblData.slice(start, end <= maxItemIndex ? end : maxItemIndex )
			}
		}
	}

}
