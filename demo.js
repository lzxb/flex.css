(function () {
    var pre = document.querySelectorAll('pre');

    for (var i = 0; i < pre.length; i++) {
        pre[i].innerHTML = pre[i].innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        pre[i].className = 'show';
    }

    var set = document.querySelectorAll('[data-set]');

    for (var i = 0; i < set.length; i++) {
        set[i].onclick = function () {
            var on = this.parentNode.querySelector('.on');
            var demo = this.parentNode.parentNode.querySelector('.demo');
            demo.setAttribute('flex', this.dataset.set);
            on.className = '';
            this.className = 'on';
        }
    }

    var demo = document.querySelectorAll('.content .demo');

    for (var i = 0; i < demo.length; i++) {
        var con = demo[i].parentNode;
        var text = document.createElement('textarea');
        text.value = con.innerHTML;
        con.appendChild(text);
    }


})();