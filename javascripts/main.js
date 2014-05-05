/* Jquery */
$(document).ready(function(){
    $.removePressDownEffect = function()
    {
      $('#calculator span').removeClass('pressdown');
    }

    var operand = 0.0;
    var clickOperator = '';
    var dotClicked = false;
    $(document).on('click touch', '#calculator span', function () { 

      $.removePressDownEffect();

      var input = $('.result');
      var inputVal = input.html();
      var htmlString = $(this).html();

      $(this).addClass('pressdown');

      if ($(this).hasClass('remove')) {
        // Clear 
        input.html('');
        operand = 0.0;
        clickOperator = '';

      } else if ($(this).hasClass('operator')) {
        operand = parseFloat(inputVal);
        
        input.html('');

        if (htmlString == '+') {  
          clickOperator = '+';
        } else if (htmlString == '-') {
          clickOperator = '-';
        } else if (htmlString == '÷') {
          clickOperator = '÷';
        } else if (htmlString == 'x') {
          clickOperator = 'x';
        }

      } else if ($(this).hasClass('equal')) {
        var rightOperand = parseFloat(inputVal);
        var result = 0;
        if (clickOperator == '+') {  
          result = operand + rightOperand;
        } else if (clickOperator == '-') {
          result = operand - rightOperand;
        } else if (clickOperator == '÷') {
          result = operand / rightOperand;
        } else if (clickOperator == 'x') {
          result = operand * rightOperand;
        }
        dotClicked = false;
        input.html(result.toString());
      } else {
        input.html(inputVal + htmlString);
      }
    });
});