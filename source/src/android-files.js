export async function saveNativeFile(blob, filename) {
  const files = window.Capacitor?.Plugins?.PrimerkaFiles;
  if (!window.Capacitor?.isNativePlatform() || !files) return false;
  const contents = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = () => reject(new Error('Не удалось подготовить файл'));
    reader.readAsDataURL(blob);
  });
  const result = await files.save({ contents, filename, mime: blob.type });
  if (result.cancelled) throw new Error('Сохранение отменено');
  return true;
}
