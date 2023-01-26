$(document).ready(function () {
  var crud = {};
  $("#btn_drug_allergy_check").on("click", function () {
    //alert('OK');
    $cid = $("#cid").val();
    window.location.href = site_url+'/report/drug_allergy/'+$cid ;
    exit(0);
  });

  $(document).on('keypress',function(e) {
    if(e.which == 13) {
      $cid = $("#cid").val();
      window.location.href = site_url+'/report/drug_allergy/'+$cid ;
      exit(0);
    }
});
});
