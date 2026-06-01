(() => {
  const runtimeNodes = document.querySelectorAll("[data-site-runtime]");

  function formatRuntime(startTime) {
    const elapsed = Math.max(0, Date.now() - startTime.getTime());
    const totalSeconds = Math.floor(elapsed / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
  }

  function updateRuntime() {
    runtimeNodes.forEach((node) => {
      const startValue = node.getAttribute("data-start");
      if (!startValue) return;
      const startTime = new Date(startValue);
      if (Number.isNaN(startTime.getTime())) return;
      node.textContent = formatRuntime(startTime);
    });
  }

  if (runtimeNodes.length) {
    updateRuntime();
    window.setInterval(updateRuntime, 1000);
  }
})();
