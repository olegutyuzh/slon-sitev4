#!/bin/bash

# ============================================================
# Build script для slon.life
# Мініфікує CSS та JS файли, створює загальний bundle
# Запуск: ./build.sh
# ============================================================

# Кольори для виводу
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # Без кольору

# Папки для мініфікованих файлів
mkdir -p css/min
mkdir -p js/min

echo -e "${BLUE}=== Початок мініфікації ===${NC}"
echo ""

# ============================================================
# Функція для підрахунку розміру файлу в KB
# ============================================================
get_size() {
    if [ -f "$1" ]; then
        wc -c < "$1" | awk '{printf "%.2f", $1/1024}'
    else
        echo "0"
    fi
}

# ============================================================
# Функція для додавання двох чисел з плаваючою точкою (через awk)
# ============================================================
add() {
    awk "BEGIN {printf \"%.2f\", $1 + $2}"
}

# ============================================================
# CSS — мініфікація кожного файлу окремо
# ============================================================
echo -e "${YELLOW}📄 Мініфікація CSS файлів...${NC}"

CSS_FILES=(
    "404"
    "biography"
    "bottom_menu"
    "candle"
    "contact"
    "football"
    "fragments"
    "life-hero-styles"
    "memories"
    "memory-map"
    "menu"
    "recognition"    
    "share"
    "stories"
    "style"
    "sub_menu"
    "voices"
)

CSS_TOTAL_BEFORE=0
CSS_TOTAL_AFTER=0

for name in "${CSS_FILES[@]}"; do
    SRC="css/${name}.css"
    DEST="css/min/${name}.min.css"

    if [ -f "$SRC" ]; then
        npx cleancss -o "$DEST" "$SRC"
        BEFORE=$(get_size "$SRC")
        AFTER=$(get_size "$DEST")
        CSS_TOTAL_BEFORE=$(add "$CSS_TOTAL_BEFORE" "$BEFORE")
        CSS_TOTAL_AFTER=$(add "$CSS_TOTAL_AFTER" "$AFTER")
        echo -e "  ${GREEN}✓${NC} ${name}.css: ${BEFORE} KB → ${AFTER} KB"
    else
        echo -e "  ${RED}✗${NC} ${SRC} не знайдено"
    fi
done

echo ""

# ============================================================
# CSS Bundle — об'єднання спільних файлів (для всіх сторінок)
# ============================================================
echo -e "${YELLOW}📦 Створення CSS bundle (спільні стилі)...${NC}"

npx cleancss -o css/min/common.bundle.min.css \
    css/style.css \
    css/menu.css \
    css/sub_menu.css \
    css/bottom_menu.css

if [ -f "css/min/common.bundle.min.css" ]; then
    BUNDLE_SIZE=$(get_size "css/min/common.bundle.min.css")
    echo -e "  ${GREEN}✓${NC} common.bundle.min.css: ${BUNDLE_SIZE} KB"
fi

echo ""

# ============================================================
# CSS Bundle — об'єднання спільних файлів (для Index сторінки)
# ============================================================
echo -e "${YELLOW}📦 Створення CSS bundle (спільні стилі)...${NC}"

npx cleancss -o css/min/index.bundle.min.css \
    css/style.css \
    css/menu.css \
    css/sub_menu.css \
    css/bottom_menu.css \
    css/candle.css

if [ -f "css/min/index.bundle.min.css" ]; then
    BUNDLE_SIZE=$(get_size "css/min/index.bundle.min.css")
    echo -e "  ${GREEN}✓${NC} index.bundle.min.css: ${BUNDLE_SIZE} KB"
fi

echo ""

# ============================================================
# JS — мініфікація кожного файлу окремо
# ============================================================
echo -e "${YELLOW}📄 Мініфікація JS файлів...${NC}"

JS_FILES=(
    "bottom_menu"
    "candle_counter"
    "candle"
    "contact"
    "fragments"
    "lang"
    "memories-skeleton"
    "memories"
    "memories_counter"
    "memory-new"
    "menu"
    "priority-1"
    "recognition"
    "quotes-counter"
    "reveal"
    "share"
    "service-worker"
    "supabase-config"
)

JS_TOTAL_BEFORE=0
JS_TOTAL_AFTER=0

for name in "${JS_FILES[@]}"; do
    SRC="js/${name}.js"
    DEST="js/min/${name}.min.js"

    if [ -f "$SRC" ]; then
        npx terser "$SRC" -o "$DEST" -c -m
        BEFORE=$(get_size "$SRC")
        AFTER=$(get_size "$DEST")
        JS_TOTAL_BEFORE=$(add "$JS_TOTAL_BEFORE" "$BEFORE")
        JS_TOTAL_AFTER=$(add "$JS_TOTAL_AFTER" "$AFTER")
        echo -e "  ${GREEN}✓${NC} ${name}.js: ${BEFORE} KB → ${AFTER} KB"
    else
        echo -e "  ${RED}✗${NC} ${SRC} не знайдено"
    fi
done

echo ""

# ============================================================
# JS Bundle — об'єднання спільних файлів (для всіх сторінок)
# ============================================================
echo -e "${YELLOW}📦 Створення JS bundle (спільні скрипти)...${NC}"

npx terser \
    js/supabase-config.js \
    js/lang.js \
    js/menu.js \
    js/bottom_menu.js \
    -o js/min/common.bundle.min.js -c -m

if [ -f "js/min/common.bundle.min.js" ]; then
    BUNDLE_SIZE=$(get_size "js/min/common.bundle.min.js")
    echo -e "  ${GREEN}✓${NC} common.bundle.min.js: ${BUNDLE_SIZE} KB"
fi

echo ""

# ============================================================
# Підсумок
# ============================================================
echo -e "${BLUE}=== Підсумок ===${NC}"
echo -e "CSS: ${CSS_TOTAL_BEFORE} KB → ${CSS_TOTAL_AFTER} KB"
echo -e "JS:  ${JS_TOTAL_BEFORE} KB → ${JS_TOTAL_AFTER} KB"
echo ""
echo -e "${GREEN}✅ Готово! Мініфіковані файли в css/min/ та js/min/${NC}"

# ============================================================
# Вбудовування критичного CSS (усунення render-blocking)
# ============================================================
echo -e "${YELLOW}🎨 Вбудовування критичного CSS...${NC}"

if [ -d node_modules/beasties ]; then
    node inline-critical.js
    echo -e "  ${GREEN}✓${NC} Критичний CSS вбудовано, шрифти відкладено"
else
    echo -e "  ${RED}✗${NC} beasties не встановлено — запустіть 'npm install'"
fi

echo ""
echo -e "${GREEN}✅ Білд завершено повністю${NC}"
