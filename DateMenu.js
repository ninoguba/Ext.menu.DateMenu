new Ext.menu.DateMenu({
  listeners: { 
    show: function(){
      this.picker.showMonthPicker();
      this.picker.mon(this.picker.monthPicker, 'click', function(e, t){
        e.stopEvent();
        var el = new Ext.Element(t), pn;
        if(el.is('button.x-date-mp-cancel')){
          this.picker.hideMonthPicker();
          this.hide();
        }
        else if(el.is('button.x-date-mp-ok')){
          var d = new Date(this.picker.mpSelYear, this.picker.mpSelMonth, (this.picker.activeDate || this.picker.value).getDate());
          if(d.getMonth() != this.picker.mpSelMonth){                
            d = new Date(this.picker.mpSelYear, this.picker.mpSelMonth, 1).getLastDateOfMonth();
          }
          this.picker.update(d);
          this.picker.hideMonthPicker();
          this.picker.setValue(d);
          this.picker.fireEvent('select', this.picker, this.picker.value);
        }
      }, this);
      this.picker.mon(this.picker.monthPicker, 'dblclick', function(e, t){
        e.stopEvent();
        var el = new Ext.Element(t), pn;
        if((pn = el.up('td.x-date-mp-month', 2))){
          var d = new Date(this.picker.mpSelYear, pn.dom.xmonth, (this.picker.activeDate || this.picker.value).getDate());
          this.picker.update(d);
          this.picker.hideMonthPicker();
          this.picker.setValue(d);
          this.picker.fireEvent('select', this.picker, this.picker.value);
        }
        else if((pn = el.up('td.x-date-mp-year', 2))){
          var d = new Date(pn.dom.xyear, this.picker.mpSelMonth, (this.picker.activeDate || this.picker.value).getDate());
          this.picker.update(d);
          this.picker.hideMonthPicker();
          this.picker.setValue(d);
          this.picker.fireEvent('select', this.picker, this.picker.value);
        }
      }, this);       
    }
  }
});
