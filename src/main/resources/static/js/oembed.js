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
    html += "<div style='height: auto'>" + "<div>html<br/>(" + data.width + "/" + data.height + ")</div>" +
        "<div style='height: auto;'><xmp>" + data.html + "</xmp>" + data.html + "</div></div>";
    html += "<div>" + "<span style='background-color:#f4f4f4'>width</span><span style='background-color:#f4f4f4'>" + data.width + "</span></div>"
    html += "<div>" + "<span>height</span><span>" + data.height + "</span></div>"
    html += "<div>" + "<span style='height: 500px; background-color: #f4f4f4'>thumbnail_url<br/>(" + data.thumbnailWidth + "/" + data.thumbnailHeight + ")</span><span style='height: 500px; background-color: #f4f4f4'><a href='" + data.thumbnailUrl + "'>" + data.thumbnailUrl + "</a><br/><br/><img src='" + data.thumbnailUrl + "'/></span></div>";
    html += "<div>" + "<span>thumbnail_width</span><span>" + data.thumbnailWidth + "</span></div>"
    html += "<div>" + "<span style='background-color:#f4f4f4 '>thumbnail_height</span><span style='background-color: #f4f4f4'>" + data.thumbnailHeight + "</span></div>"
    html += "</div>"
    $("#content").empty();
    $("#content").append(html);
}