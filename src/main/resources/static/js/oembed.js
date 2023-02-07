function search() {
    const url = document.getElementById("search").value;
    console.log("search 함수 실행")
    $.ajax({
        type: 'GET',
        url: "/api/oembed?url=" + url,
        dataType: 'json',
        success: function (json) {
            console.log(json);
            resultHtml(json);
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function resultHtml(data) {

    var html = "<table style='width:1000px;'>"
    html += "<div class='div_4'>"
    html += "<div> " + "<span>title</span><span style='font-weight: bold'>" + data.title + "</span></div>"
    html += "<div>" + "<span>type</span><span>" + data.type + "</span></div>"
    html += "<div>" + "<span style='background-color:#f4f4f4 '>version</span><span style='background-color:#f4f4f4 '>" + data.version + "</span></div>"
    html += "<div>" + "<span>provider_name</span><span>" + data.providerName + "</span></div>"
    html += "<div>" + "<span style='background-color:#f4f4f4'>providerUrl</span><span style='background-color:#f4f4f4'>" + "<a href=" + data.providerUrl + ">" + data.providerUrl + "</a></span></div>"
    html += "<div>" + "<span>author_name</span><span>" + data.authorName + "</span></div>"
    html += "<div>" + "<span style='background-color:#f4f4f4'>author_url</span><span style='background-color:#f4f4f4'>" + "<a href=" + data.authorUrl + ">" + data.authorUrl + "</a></span></div>"
    html += "<div>" + "<span style='height: 700px;'>html<br/>(" + data.width + "/" + data.height + ")</span>" +
        "<span style='height: 700px;'><xmp>" + data.html + "</xmp>" + data.html + "</span></div>";
    html += "<div>" + "<span style='background-color:#f4f4f4'>width</span><span style='background-color:#f4f4f4'>" + data.width + "</span></div>"
    html += "<div>" + "<span>height</span><span>" + data.height + "</span></div>"
    html += "<div>" + "<span style='height: 500px; background-color: #f4f4f4'>thumbnail_url<br/>(" + data.thumbnailWidth + "/" + data.thumbnailHeight + ")</span><span style='height: 500px; background-color: #f4f4f4'><a href='" + data.thumbnailUrl + "'>" + data.thumbnailUrl + "</a><br/><br/><img src='" + data.thumbnailUrl + "'/></span></div>";
    html += "<div>" + "<span>thumbnail_width</span><span>" + data.thumbnailWidth + "</span></div>"
    html += "<div>" + "<span style='background-color:#f4f4f4 '>thumbnail_height</span><span style='background-color: #f4f4f4'>" + data.thumbnailHeight + "</span></div>"
    html += "</div>"
    $("#content").empty();
    $("#content").append(html);

    // if (data.url == "youtube") {
    //     // var html = "<div class=\"div_4\">";
    //     var html = "<table style='width:1000px;'>"
    //     html += "<div class='div_4'>"
    //     html += "<div> " + "<span>title</span><span style='font-weight: bold'>" + data.title + "</span></div>"
    //     html += "<div>" + "<span>type</span><span>" + data.type + "</span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4 '>version</span><span style='background-color:#f4f4f4 '>" + data.version + "</span></div>"
    //     html += "<div>" + "<span>provider_name</span><span>" + data.provider_name + "</span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4'>provider_url</span><span style='background-color:#f4f4f4'>" + "<a href=" + data.provider_url + ">" + data.provider_url + "</a></span></div>"
    //     html += "<div>" + "<span>author_name</span><span>" + data.author_name + "</span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4'>author_url</span><span style='background-color:#f4f4f4'>" + "<a href=" + data.author_url + ">" + data.author_url + "</a></span></div>"
    //     html += "<div>" + "<span style='height:200px'>html<br/>(" + data.width + "/" + data.height + ")</span>" +
    //         "<span style='height:200px;'><xmp>" + data.html + "</xmp>" + data.html + "</span></div>";
    //     html += "<div>" + "<span style='background-color:#f4f4f4'>width</span><span style='background-color:#f4f4f4'>" + data.width + "</span></div>"
    //     html += "<div>" + "<span>height</span><span>" + data.height + "</span></div>"
    //     html += "<div>" + "<span style='height: 500px; background-color: #f4f4f4'>thumbnail_url<br/>(" + data.thumbnail_width + "/" + data.thumbnail_height + ")</span><span style='height: 500px; background-color: #f4f4f4'><a href='" + data.thumbnail_url + "'>" + data.thumbnail_url + "</a><br/><br/><img src='" + data.thumbnail_url + "'/></span></div>";
    //     html += "<div>" + "<span>thumbnail_width</span><span>" + data.thumbnail_width + "</span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4 '>thumbnail_height</span><span style='background-color: #f4f4f4'>" + data.thumbnail_height + "</span></div>"
    //     html += "</div>"
    //     $("#content").empty();
    //     $("#content").append(html);
    // } else if (data.url == "vimeo") {
    //     console.log(data)
    //
    //     var html = "<table style='width:1000px;'>"
    //     html += "<div class='div_4'>"
    //     html += "<div> " + "<span>title</span><span style='font-weight: bold'>" + data.title + "</span></div>"
    //     html += "<div>" + "<span>type</span><span>" + data.type + "</span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4 '>version</span><span style='background-color:#f4f4f4 '>" + data.version + "</span></div>"
    //     html += "<div>" + "<span>provider_name</span><span>" + data.provider_name + "</span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4'>provider_url</span><span style='background-color:#f4f4f4'>" + "<a href=" + data.provider_url + ">" + data.provider_url + "</a></span></div>"
    //     html += "<div>" + "<span>author_name</span><span>" + data.author_name + "</span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4'>author_url</span><span style='background-color:#f4f4f4'>" + "<a href=" + data.author_url + ">" + data.author_url + "</a></span></div>"
    //     html += "<div>" + "<span style='height:700px'>html<br/>(" + data.width + "/" + data.height + ")</span>" +
    //         "<span style='height:700px;'><xmp>" + data.html + "</xmp>" + data.html + "</span></div>";
    //     html += "<div>" + "<span style='background-color:#f4f4f4'>width</span><span style='background-color:#f4f4f4'>" + data.width + "</span></div>"
    //     html += "<div>" + "<span>height</span><span>" + data.height + "</span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4 '>duration</span><span style='background-color:#f4f4f4'>" + data.duration + "</span></div>"
    //     html += "<div>" + "<span>description</span><span>" + data.description + "</span></div>"
    //     html += "<div>" + "<span style='height: 700px; background-color: #f4f4f4'>thumbnail_url<br/>(" + data.thumbnail_width + "/" + data.thumbnail_height + ")</span><span style='height: 700px; background-color: #f4f4f4'><a href='" + data.thumbnail_url + "'>" + data.thumbnail_url + "</a><br/><br/><img src='" + data.thumbnail_url + "'/></span></div>";
    //     html += "<div>" + "<span>thumbnail_width</span><span>" + data.thumbnail_width + "</span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4 '>thumbnail_height</span><span style='background-color: #f4f4f4'>" + data.thumbnail_height + "</span></div>"
    //     html += "<div>" + "<span style='height: 100px;'>thumbnail_url_with_<br/>play_button</span><span style='height: 100px;'>" + "<a href=" + data.thumbnail_url_with_play_button + ">" + data.thumbnail_url_with_play_button + "</a></span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4'>upload_date</span><span style='background-color:#f4f4f4 '>" + data.upload_date + "</span></div>"
    //     html += "<div>" + "<span>video_id</span><span>" + data.video_id + "</span></div>"
    //     html += "<div>" + "<span style='background-color:#f4f4f4 '>uri</span><span style='background-color:#f4f4f4'>" + data.uri + "</span></div>"
    //     html += "</div>"
    //     $("#content").empty();
    //     $("#content").append(html);
    // } else if (data.error = "error") {
    //     alert(data.msg)
    // }
}

//
// try {
//     return (typeof data === 'object');
// } catch (e) {
//     console.log("exception");
//     return false;
// }
