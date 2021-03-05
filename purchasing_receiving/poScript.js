$(document).ready(function(){
  
    function calculateTotal(currentGroup) {
      var groupTotal = 0;
      currentGroup.parents('table').find('.rowTotal').each(function( i ){
        groupTotal = Number(groupTotal) + Number( $(this).text() );
      });
      currentGroup.parents('table').find('.total').text(groupTotal.toFixed(2));
      currentGroup.parents('table').find('.subtotal').text(groupTotal.toFixed(2));
    }

    $(".document.active").delegate( ".tdDelete", "click", function() {
      if ($(this).parents('tbody').children().length > 1){
        $(this).prev().text('0');
        calculateTotal($(this));
        
        $(this).parents('tr').remove();
      }
    });
  
    $(".document.active").delegate( ".trAdd", "click", function() {
        $(this).parents('table').find('tbody').append( $(this).parents('table').find('tbody tr:last-child').clone() );
        calculateTotal($(this));
    });
  
  $(".document.active").delegate( ".amount", "keyup", function() {
    //console.log('test');
    calculateTotal($(this));
  });
  
  
  
  
    var tdValues = [];
    $(".document.active .proposedWork").delegate( "td:not(.description .unit)", "keyup", function() {
      tdValues.length = 0;
  
        //Paint
        $(this).parents('tr').find('td').each(function( i ){
          if(i > 4){return false}
          if(i == 4){$(this).text( tdValues[0]*tdValues[3] )}
          tdValues[i] = Number( $(this).text() );
        });

      calculateTotal($(this));
    });
  
  
  

});