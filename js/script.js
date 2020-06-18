$(function() {
 
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
 
});

/*
$('.セレクタ名').on('click',function(event) {　　
        　イベント発生時に行われる処理
});

$('#id名 要素名')と指定すると、id内の子要素に対してのみ指定される
*/


/*
$('セレクタ名').animate({　　　
      変化対象のプロパティ名:変化値　　
    }, アニメーションの動作時間);　

animate( ) は、アニメーション効果を設定する関数
scrollTop は、スクロール位置を取得できるメソッド
「scrollTop:0」は「最上部に移動する」の意味
アニメーションの動作時間を「800」で指定しているので、「800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」の意味
アニメーションの動作時間は、ミリ秒で指定する以外にも、「slow」、「normal」、「fast」で指定することも可能
evnet.preventDefault(); は、aタグの機能を無効にするメソッド
（aタグは画面遷移をする機能を保つが、今回は必要ないため無効化）
*/