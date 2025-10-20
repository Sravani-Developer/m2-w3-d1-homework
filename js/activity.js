$(document).ready(function () {
  const $table = $('#activities-table');
  $table.on('click', 'td.slot:not(.na)', function () {
    const $cell = $(this);
    $cell.toggleClass('selected');
    const isSelected = $cell.hasClass('selected');
    $cell.attr('aria-pressed', isSelected ? 'true' : 'false');
  });

  $table.on('keydown', 'td.slot:not(.na)', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).click();
    }
  });

  $table.find('td.slot').attr('tabindex', 0);

  $table.find('td.na').removeClass('slot').attr('tabindex', -1);
});

$(document).ready(function () {
  const $table  = $('#activities-table');
  const $box    = $('#displaySelected');  
  const $result = $('#result');            
  function showBox() { $box.stop(true, true).fadeIn(150).css('margin-top', '2em'); }
  function hideBox() { $box.hide().css('margin-top', '0'); }
  function hasItems() { return $result.find('p').length > 0; }
  $table.on('click', 'td.slot:not(.na)', function () {
    const $cell   = $(this);
    const content = $.trim($cell.text());

    if (!content || content === 'Not Available') return;
    const colIndex = $cell.index();
    let siteName = $.trim($table.find('thead th').eq(colIndex).text());
    if (!siteName) {
      siteName = $.trim($table.find('tr').first().children().eq(colIndex).text());
    }

    const isSelected = $cell.hasClass('selected');

    if (isSelected) {
      const exists = $result.find('p').filter(function () {
        const t = $(this).text();
        return t.indexOf(content) !== -1 && t.indexOf(siteName) !== -1;
      }).length > 0;

      if (!exists) {
        $result.append(
          '<p>' + content + ' <span class="site">at ' + siteName + '</span></p>'
        );
      }
      showBox();
    } else {
      $result.find('p').filter(function () {
        const t = $(this).text();
        return t.indexOf(content) !== -1 && t.indexOf(siteName) !== -1;
      }).remove();

      if (!hasItems()) hideBox();
    }
  });
});
