$(function () {
  $(".content-selector-box div").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    $(".main__content").eq($(this).index()).addClass("main__content--active").siblings().removeClass("main__content--active")
  })
  
  $(".btn").click(function () {
    $(this).attr("url")
    $(".popout_url").html($(this).attr("url"))
    $(".copy").attr("data-clipboard-text",$(this).attr("url"))
    $(".alert,.popout").show()
  })

document.body.addEventListener('touchstart', function () {}) //...空函数即可});

  var clipboard = new ClipboardJS('.copy');

    clipboard.on('success', function(e) {
        alert('复制成功!')
    });
    clipboard.on('error', function(e) {
      alert('复制成功!')
    });

    $(".close").click(function () {
      $(".alert,.popout").hide()
    })

})