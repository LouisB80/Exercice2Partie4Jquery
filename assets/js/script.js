$(document).ready(function(){
  console.log($('.Note'));
  $('#btn').on('click', function(){
    var summ = 0, res = 0;
    $('.Note').each(function(){
      summ += parseInt($(this).val());
    })
    res = summ / $('.Note').length;
    //Test
    console.log(summ);
    console.log(res);
    console.log($('.Note').length);
  })
})
