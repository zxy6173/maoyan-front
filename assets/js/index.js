window.addEventListener("load", function () {
    // 显示票房排行
    $.ajax({
        type: "get",
        url: "/films/boxOffices",
        success: function (result) {
            let str = "";

            result.data.boxOfficeList.forEach(function (ele, i) {

                if (i == 0) {
                    str += `<li class="ranking-item ranking-top ranking-index-1">
                     <a href="#" target="_blank" data-act="ticketList-movie-click" data-val="{movieid:248683}">
                         <div class="ranking-top-left">
                             <i class="ranking-top-icon"></i>
                             <img class="ranking-img  default-img" src="${ele.indexImage}">
                         </div>
                         <div class="ranking-top-right">
                             <div class="ranking-top-right-main">
                                 <span class="ranking-top-moive-name">${ele.name}</span>


                                 <p class="ranking-top-wish">
                                     <span class="stonefont">${ele.boxOffice}</span>万
                                 </p>
                             </div>
                         </div>
                     </a>
                 </li>`
                } else {
                    str += `<li class="ranking-item ranking-index-${i + 1}">
                    <a href="/films/588362" target="_blank" data-act="ticketList-movie-click" data-val="{movieid:588362}">
                        <span class="normal-link">
                            <i class="ranking-index">${i + 1}</i>
                            <span class="ranking-movie-name">${ele.name}</span>

                            <span class="ranking-num-info">
                                <span class="stonefont">${ele.boxOffice}</span>万
                        </span>
                        </span>
                    </a>
                </li>`;
                }
            });
            $("#app ul.ranking-box").html(str);
        }
    });

    // 显示最受期待电影
    $.ajax({
        type: "get",
        url: "/films/wantWatches",
        success: function (result) {
            let str = "";

            result.data.wantWatchList.forEach(function (ele, i) {

                if (i == 0) {
                    str += `<li class="ranking-item ranking-top ranking-index-1">
                     <a href="/films/248645" target="_blank" data-act="mostExpect-movie-click" data-val="{movieid:248645}">
                         <div class="ranking-top-left">
                             <i class="ranking-top-icon"></i>
                             <img class="ranking-img  default-img" src="${ele.indexImage}">
                         </div>
                         <div class="ranking-top-right">
                             <div class="ranking-top-right-main">
                                 <span class="ranking-top-moive-name">${ele.name}</span>

                                 <p class="ranking-release-time">上映时间：${ele.showTime}</p>

                                 <p class="ranking-top-wish">
                                     <span class="stonefont">${ele.wantWatch}</span>人想看
                                 </p>
                             </div>
                         </div>
                     </a>
                 </li>`
                } else {
                    str += `<li class="ranking-item ranking-index-${i + 1}">
                    <a href="/films/246012" target="_blank" data-act="mostExpect-movie-click" data-val="{movieid:246012}">
                        <i class="ranking-index">${i + 1}</i>`
                    if (i == 1 || i == 2) {
                        str += `<span class="img-link"><img class="ranking-img default-img" src="${ele.indexImage}"></span>`;
                    }
                    str += `<div class="name-link ranking-movie-name">${ele.name}</div>

                        <span class="ranking-num-info"><span class="stonefont">${ele.wantWatch}</span>人想看</span>
                    </a>
                </li>`;
                }
            });
            $("#app ul.ranking-mostExpect").html(str);
        }
    });

    // 显示用户评分排行榜
    $.ajax({
        type: "get",
        url: "/films/userGrades",
        success: function (result) {
            let str = "";

            result.data.userGradeList.forEach(function (ele, i) {

                if (i == 0) {
                    str += `<li class="ranking-item ranking-top ranking-index-1">
                     <a href="/films/1203" target="_blank" data-act="TOP100-movie-click" data-val="{movieid:1203}">
                         <div class="ranking-top-left">
                             <i class="ranking-top-icon"></i>
                             <img class="ranking-img  default-img" src="${ele.indexImage}">
                         </div>
                         <div class="ranking-top-right">
                             <div class="ranking-top-right-main">
                                 <span class="ranking-top-moive-name">${ele.name}</span>


                                 <p class="ranking-top-wish">
                                     <span class="stonefont">${ele.userGrade}</span>分
                                 </p>
                             </div>
                         </div>
                     </a>
                 </li>`
                } else {
                    str += `<li class="ranking-item ranking-index-${i + 1}">
                    <a href="/films/1297" target="_blank" data-act="TOP100-movie-click" data-val="{movieid:1297}">
                        <span class="normal-link">
                            <i class="ranking-index">${i + 1}</i>
                            <span class="ranking-movie-name">${ele.name}</span>

                        <span class="ranking-num-info">
                            <span class="stonefont">${ele.userGrade}</span>分
                        </span>
                        </span>
                    </a>
                </li>`;
                }
            });
            $("#app ul.ranking-top100").html(str);
        }
    });

    //显示热映
    $.ajax({
        type: "get",
        url: "/films/hots",
        success: function (result) {
            let str = "";
            $("#hotPanel span.panel-title span.textcolor_red").html(`正在热映（${result.data.hotCount}部）`);
            result.data.hotList.forEach(function (ele, i) {             
                    str += `<dd>
                    <div class="movie-item">
                        <a href="/films/248683" target="_blank" data-act="playingMovie-click" data-val="{movieid:248683}">
                            <div class="movie-poster">
                                <img src="${ele.indexImage}">
                                <div class="movie-overlay movie-overlay-bg">
                                    <div class="movie-info">
                                        <div class="movie-score"><i class="integer">${ele.userGrade.toString().split(".")[0]}.</i><i class="fraction">${ele.userGrade.toString().split(".")[1]}</i></div>
                                        <div class="movie-title movie-title-padding" title="${ele.name}">${ele.name}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="movie-detail movie-detail-strong movie-sale">
                            <a href="http://www.meituan.com/dianying/248683?#content" class="active" target="_blank" data-act="salePlayingMovie-click" data-val="{movieid:248683}">购 票</a>
                        </div>
                        <div class="movie-ver"></i></div>
                    </div>

                </dd>`;
            });
            $("#hotPanel dl.movie-list").html(str);
        }
    });

    //显示即将上映
    $.ajax({
        type: "get",
        url: "/films/soons",
        success: function (result) {
            let str = "";
            $("#hotPanel span.panel-title span.textcolor_red").html(`即将上映（${result.data.soonCount}部）`);
            result.data.soonList.forEach(function (ele, i) {             
                    str += `<dd>
                    <div class="movie-item">
                        <a href="/films/1197452" target="_blank" data-act="upcomingMovie-click" data-val="{movieid:1197452}">
                            <div class="movie-poster">
                                <img src="${ele.indexImage}">
                                <div class="movie-overlay movie-overlay-bg">
                                    <div class="movie-info">
                                        <div class="movie-title" title="${ele.name}">${ele.name}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="movie-detail movie-wish"><span class="stonefont">${ele.wantWatch}</span>人想看</div>
                        <div class="movie-detail movie-detail-strong movie-presale">
                            <a class="movie-presale-sep">预告片
</a><a href="#" class="active" target="_blank" data-act="presaleUpcomingMovie-click" data-val="{movieid:1197452}">预 售</a>
                        </div>
                        <div class="movie-ver"></div>
                    </div>
                    <div class="movie-detail movie-rt">${ele.showTime}上映</div>

                </dd>`;
            });
            $("#soonPanel dl.movie-list").html(str);
        }
    });

    //显示热播电影
    $.ajax({
        type: "get",
        url: "/films/playings",
        success: function (result) {
            let str = "";
            result.data.playList.forEach(function (ele, i) {             
                    str += `<dd>
                    <div class="movie-item">
                        <a href="/films/248683" target="_blank" data-act="hotMovie-click" data-val="{movieid:248683}">
                            <div class="movie-poster ${i == 0 ? 'movie-poster-long' : ''}">
                                <img src="${ele.indexImage}">
                                <div class="movie-overlay movie-overlay-bg">
                                    <div class="movie-info">
                                        <div class="movie-score"><i class="integer">9.</i><i class="fraction">1</i></div>
                                        <div class="movie-title movie-title-padding" title="${ele.name}"><${ele.name}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <!-- <div class="movie-ver"><i class="imax3d"></i></div> -->
                    </div>

                </dd>`;
            });
            $("#playingPanel dl.movie-list").html(str);
        }
    });
});