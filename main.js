$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

var textField = $('#display');
var numberBtns = Array.from($$('.cal_buttons'));
numberBtns.forEach(function(numberBtn)
{
    numberBtn.onclick = function()
    {
        if(numberBtn.textContent === 'AC')
        {
            textField.value = '0';
        }
        else if(numberBtn.textContent === 'Del')
        {
            if(textField.value === 'Can\'t be divided by 0')
            {
                textField.value = '0';
                return;
            }
            var arrText = Array.from(textField.value);
            arrText.splice(arrText.length-1, 1);
            textField.value = arrText.join('');
            if(textField.value === '')
            {
                textField.value = '0';
            }
        }
        else if(numberBtn.textContent === '=')
        {
            if(textField.value.split('/')[1] === '0')
            {
                textField.value = 'Can\'t be divided by 0';
                return;
            }
            var result = eval(textField.value);
            var valueAfterDot = String(result);
            if(valueAfterDot.includes('.'))
            {
                const valueBeforeDot = valueAfterDot.split('.')[0];
                valueAfterDot = valueAfterDot.split('.')[1];
                if(valueAfterDot.length > 14)
                {
                    var arrValue = Array.from(valueAfterDot);
                    arrValue.splice(14,valueAfterDot.length-13);
                    valueAfterDot = arrValue.join('');
                }
                result = valueBeforeDot + '.' + valueAfterDot;
            }
            textField.value = result;
        }
        else
        {
            if(textField.value === '0')
            {
                textField.value = numberBtn.textContent;
            }
            else
            {
                textField.value += numberBtn.textContent;
            }
        }
    };
});