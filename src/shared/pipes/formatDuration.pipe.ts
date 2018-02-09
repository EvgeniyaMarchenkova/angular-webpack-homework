import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {
  transform(durationMins: number) {
    const h = durationMins / 60 | 0,
          m = durationMins % 60 | 0;
    if (h === 0) {
      return m + 'min';
    }
    return h + 'h ' + m + 'min';
  }
}

//a(
//  ng-repeat="value in critCondition.textValues"
//  ng-click="critCondition.changeValue($index)"
//  href="#"
//  ng-model="critCondition.textValues"
//) {{value || 'any'}} &nbsp;

//span.glyphicon.glyphicon-plus-sign(ng-click="critCondition.editable={text:''}")
//form(
//  class="form-inline"
//  )
//  input(
//    type="text"
//    class="editable-has-buttons editable-input form-control input-sm"
//    ng-if="critCondition.editable"
//    ng-model="critCondition.editable.text"
//  )
//  span( class="editable-buttons" )
//    button(
//      ng-click="critCondition.saveValue()"
//      class="btn btn-primary btn-small"
//      ng-if="critCondition.editable"
//    )
//      span.glyphicon.glyphicon-ok
//    button(
//      ng-click="critCondition.editable = null"
//      class="btn btn-default btn-small"
//      ng-if="critCondition.editable"
//    )
//      span.glyphicon.glyphicon-remove

//a(
//     editable-text="critCondition.query",
//     onaftersave="critCondition.onUpdate()",
//     ng-class="{'editable-empty': critCondition.query === 'any'}"
//   ) {{critCondition.textValues.join(',') || 'any'}}
