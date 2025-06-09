
function set_range_event(rangeId, resultId, minValuePId, maxValuePId, minValue = 0, maxValue = 100) {
    const output_result = document.getElementById(resultId);
    const input_range = document.getElementById(rangeId);
    const minValueP = document.getElementById(minValuePId);
    const maxValueP = document.getElementById(maxValuePId);

    input_range.addEventListener('input', (e) => {
        output_result.value = input_range.value;
    });
    input_range.min = minValue;
    input_range.max = maxValue;

    minValueP.innerHTML = input_range.min;
    maxValueP.innerHTML = input_range.max;
}

function set_ranges_sum(ids, output) {
    
    const output_text = document.getElementById(output);
    for (i in ids)
    {
        document
        .getElementById(ids[i])
        .addEventListener("input", (e) => {
            let sum = 0;
            for (i in ids) {
                sum += Number(document.getElementById(ids[i]).value);
            }

            output_text.innerHTML = sum;
            if (sum > 200) {
                output_text.style.color = 'red';
            }
            else {
                output_text.style.color = 'black';
            }
        });
    }
}

set_range_event('slider-1', 'result-1', 'minValue-1', 'maxValue-1');
set_range_event('slider-2', 'result-2', 'minValue-2', 'maxValue-2', 50, 200);

set_ranges_sum(['slider-1', 'slider-2'], 'global-result');