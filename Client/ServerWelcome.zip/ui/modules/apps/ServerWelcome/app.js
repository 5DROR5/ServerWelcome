// =============================================================================
// Server Welcome Popup
// License: The Unlicense (public domain)
// =============================================================================

// TODO: Replace with your own Discord invite link
var DISCORD_URL = 'https://discord.gg/XXXXXXX';

angular.module('beamng.apps')
.directive('serverWelcome', ['$timeout', function($timeout) {
  return {
    templateUrl: '/ui/modules/apps/ServerWelcome/app.html',
    replace: true,
    link: function(scope) {

      if (document.getElementById('sw-overlay')) { return; }

      var overlay = document.createElement('div');
      overlay.id = 'sw-overlay';
      overlay.className = 'sw-overlay';

      var modal = document.createElement('div');
      modal.id = 'sw-modal';
      modal.className = 'sw-modal';

      var xBtn = document.createElement('button');
      xBtn.className = 'sw-x';
      xBtn.textContent = '\u2715';

      var body = document.createElement('div');
      body.className = 'sw-body';

      var title = document.createElement('h2');
      title.className = 'sw-title';
      title.textContent = 'Welcome to the Server! 👋';

      var subtitle = document.createElement('p');
      subtitle.className = 'sw-subtitle';
      subtitle.textContent = 'Join our Discord to stay updated, report issues, and connect with the community.';

      var discordBtn = document.createElement('button');
      discordBtn.className = 'sw-btn sw-btn-discord';
      discordBtn.textContent = '💬 Join Discord';

      var closeBtn = document.createElement('button');
      closeBtn.className = 'sw-btn sw-btn-close';
      closeBtn.textContent = 'Close';

      var buttons = document.createElement('div');
      buttons.className = 'sw-buttons';
      buttons.appendChild(discordBtn);
      buttons.appendChild(closeBtn);

      body.appendChild(title);
      body.appendChild(subtitle);
      body.appendChild(buttons);
      modal.appendChild(body);
      modal.appendChild(xBtn);
      document.body.appendChild(overlay);
      document.body.appendChild(modal);

      function show() {
        overlay.className = 'sw-overlay sw-visible';
        modal.className   = 'sw-modal sw-visible';
      }

      function hide() {
        overlay.className = 'sw-overlay';
        modal.className   = 'sw-modal';
      }

      overlay.addEventListener('click', hide);
      closeBtn.addEventListener('click', hide);
      xBtn.addEventListener('click', hide);

      discordBtn.addEventListener('click', function() {
        try {
          bngApi.engineLua('MPCoreNetwork.openURL("' + DISCORD_URL + '")');
        } catch(e) {
          console.error('[ServerWelcome] error:', e);
        }
        hide();
      });

      $timeout(function() { show(); }, 500);

      scope.$on('$destroy', function() {
        overlay.parentNode && overlay.parentNode.removeChild(overlay);
        modal.parentNode   && modal.parentNode.removeChild(modal);
      });
    }
  };
}]);
