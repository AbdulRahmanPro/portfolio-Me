module.exports = {
  content: ["./dist/**/*.html", "./**/*.js"], // قم بتحديد جميع ملفات HTML و JS الموجودة في المشروع
  theme: {
    extend: {
      colors: {
        "primary-color": "#00ADB5",
        "Text_color_primary":"#EEEEEE",
        "Dark_color_primary":"#222831"
      },
      boxShadow: {
        'text-shadow': 'text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);',
      },
    },    
  },
  plugins: [],
};
