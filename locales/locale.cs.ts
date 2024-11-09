import { Locale } from './locale';

export const locale: Locale = {
  name: 'czech',
  language: 'cs',
  items: [
    // General
    { source: 'Save', target: 'Uložit' },
    { source: 'Create', target: 'Vytvořit' },
    { source: 'Duplicating', target: 'Duplikování' },
    { source: 'Duplicate', target: 'Duplikát' },
    { source: 'Mass Edit', target: 'Hromadná úprava' },
    { source: 'Export', target: 'Export' },
    { source: 'Import', target: 'Import' },
    { source: 'Delete', target: 'Smazat' },

    // Fields
    { source: 'optional', target: 'volitelné' },
    { source: 'choose', target: 'vybrat' },
    { source: 'Clear value', target: 'Vymazat hodnotu' },
    { source: 'loading...', target: 'načítání...' },
    { source: 'Nothing found', target: 'Nic nenalezeno' },
    { source: 'Search...', target: 'Hledat...' },
    { source: 'Enter at least {0} characters', target: 'Zadejte alespoň {0} znaků' },

    // List components
    { source: 'Filter', target: 'Filtr' },
    { source: 'Filter by field', target: 'Filtrovat podle pole' },
    { source: 'Filter by...', target: 'Filtrovat podle...' },
    { source: 'Back', target: 'Zpět' },
    { source: 'Back to {0} fields', target: 'Zpět na {0} polí' },
    { source: 'Choose {0} from list', target: 'Vyberte {0} ze seznamu' },
    { source: '{0} fields', target: '{0} polí' },
    { source: '{0} relationships', target: '{0} vztahů' },
    { source: 'Aggregate {0}', target: 'Agregovat {0}' },
    { source: 'No fields to select', target: 'Žádná pole k výběru' },
    { source: 'Enter value...', target: 'Zadejte hodnotu...' },
    { source: 'Exclude', target: 'Vyloučit' },
    { source: 'Actions', target: 'Akce' },
    { source: 'Search', target: 'Hledat' },
    { source: 'Sort 1 → 9', target: 'Řadit 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Řadit 9 → 1' },
    { source: 'Sort A → Z', target: 'Řadit A → Z' },
    { source: 'Sort Z → A', target: 'Řadit Z → A' },
    { source: 'Refresh automatically', target: 'Automaticky obnovovat' },
    { source: 'All', target: 'Vše' },
    { source: 'Selected', target: 'Vybráno' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Bohužel nebyly nalezeny žádné {0} odpovídající vašemu dotazu'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Načítáme {0}, prosím, čekejte...' },
    { source: 'Add filter', target: 'Přidat filtr' },
    { source: 'Delete this filter', target: 'Smazat tento filtr' },
    { source: 'Toggle ordering', target: 'Přepnout řazení' },
    { source: 'Loading failed', target: 'Načítání selhalo' },
    { source: 'Not configured', target: 'Nekonfigurováno' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Bohužel tato komponenta ještě není nakonfigurována'
    },
    { source: 'records', target: 'záznamy' },
    { source: '{0} items', target: '{0} položek' },

    // Menu
    { source: 'Users & Teams', target: 'Uživatelé a týmy' },
    { source: 'Billing', target: 'Fakturace' },
    { source: 'Billing & Plans', target: 'Fakturace a plány' },
    { source: 'API keys', target: 'API klíče' },
    { source: 'Dark Mode', target: 'Tmavý režim' },
    { source: 'Light Mode', target: 'Světlý režim' },
    { source: 'Disable Staff', target: 'Zakázat personál' },
    { source: 'Enable Staff', target: 'Povolit personál' },
    { source: 'Manage Templates', target: 'Spravovat šablony' },
    { source: 'Logout', target: 'Odhlásit se' },
    { source: 'Activity Log', target: 'Protokol aktivit' },
    { source: 'Collaborations', target: 'Spolupráce' },
    { source: 'Open Visual Builder', target: 'Otevřít vizuální builder' },

    // Filters
    { source: 'equals', target: 'rovná se' },
    { source: 'does not equal', target: 'nerovná se' },
    { source: '{0} equals {1}', target: '{0} se rovná {1}' },
    { source: '{0} does not equal {1}', target: '{0} se nerovná {1}' },

    { source: 'contains', target: 'obsahuje' },
    { source: 'does not contain', target: 'neobsahuje' },
    { source: '{0} contains {1}', target: '{0} obsahuje {1}' },
    { source: '{0} not contains {1}', target: '{0} neobsahuje {1}' },

    { source: 'starts with', target: 'začíná na' },
    { source: 'does not start with', target: 'nezačíná na' },
    { source: '{0} starts with {1}', target: '{0} začíná na {1}' },
    { source: '{0} does not start with {1}', target: '{0} nezačíná na {1}' },

    { source: 'ends with', target: 'končí na' },
    { source: 'does not end with', target: 'nekončí na' },
    { source: '{0} ends with {1}', target: '{0} končí na {1}' },
    { source: '{0} does not end with {1}', target: '{0} nekončí na {1}' },

    { source: 'greater than', target: 'větší než' },
    { source: 'is not greater than', target: 'není větší než' },
    { source: '{0} is greater than {1}', target: '{0} je větší než {1}' },
    { source: '{0} not greater than {1}', target: '{0} není větší než {1}' },

    { source: 'greater than or equals', target: 'větší nebo rovno' },
    { source: 'is not greater than or equals', target: 'není větší nebo rovno' },
    { source: '{0} is greater than or equals {1}', target: '{0} je větší nebo rovno {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} není větší nebo rovno {1}' },

    { source: 'less than', target: 'menší než' },
    { source: 'is not less than', target: 'není menší než' },
    { source: '{0} is less than {1}', target: '{0} je menší než {1}' },
    { source: '{0} is not less than {1}', target: '{0} není menší než {1}' },

    { source: 'less than or equals', target: 'menší nebo rovno' },
    { source: 'is not less than or equals', target: 'není menší nebo rovno' },
    { source: '{0} is less than or equals {1}', target: '{0} je menší nebo rovno {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} není menší nebo rovno {1}' },

    { source: 'one of', target: 'jeden z' },
    { source: 'is one of', target: 'je jeden z' },
    { source: 'is not one of', target: 'není jeden z' },
    { source: '{0} is one of {1}', target: '{0} je jeden z {1}' },
    { source: '{0} is not one of {1}', target: '{0} není jeden z {1}' },

    { source: 'is null', target: 'je prázdný' },
    { source: 'is not null', target: 'není prázdný' },
    { source: '{0} is null', target: '{0} je prázdný' },
    { source: '{0} is not null', target: '{0} není prázdný' },

    { source: 'is future', target: 'je v budoucnosti' },
    { source: 'in the future', target: 'v budoucnosti' },
    { source: 'is not in the future', target: 'není v budoucnosti' },
    { source: '{0} is in the future', target: '{0} je v budoucnosti' },
    { source: '{0} is not in the future', target: '{0} není v budoucnosti' },

    { source: 'is past', target: 'je v minulosti' },
    { source: 'in the past', target: 'v minulosti' },
    { source: 'is not in the past', target: 'není v minulosti' },
    { source: '{0} is in the past', target: '{0} je v minulosti' },
    { source: '{0} is not in the past', target: '{0} není v minulosti' },

    { source: 'is Today', target: 'je dnes' },
    { source: 'today', target: 'dnes' },
    { source: 'is not today', target: 'není dnes' },
    { source: '{0} is today', target: '{0} je dnes' },
    { source: '{0} is not today', target: '{0} není dnes' },

    { source: 'is Yesterday', target: 'je včera' },
    { source: 'yesterday', target: 'včera' },
    { source: 'is not yesterday', target: 'není včera' },
    { source: '{0} is yesterday', target: '{0} je včera' },
    { source: '{0} is not yesterday', target: '{0} není včera' },

    { source: 'is Last Week', target: 'je minulý týden' },
    { source: 'last week', target: 'minulý týden' },
    { source: 'is not last week', target: 'není minulý týden' },
    { source: '{0} is last week', target: '{0} je minulý týden' },
    { source: '{0} is not last week', target: '{0} není minulý týden' },

    { source: 'is Last Month', target: 'je minulý měsíc' },
    { source: 'last month', target: 'minulý měsíc' },
    { source: 'is not last month', target: 'není minulý měsíc' },
    { source: '{0} is last month', target: '{0} je minulý měsíc' },
    { source: '{0} is not last month', target: '{0} není minulý měsíc' },

    { source: 'is Last Quarter', target: 'je minulé čtvrtletí' },
    { source: 'last quarter', target: 'minulé čtvrtletí' },
    { source: 'is not last quarter', target: 'není minulé čtvrtletí' },
    { source: '{0} is last quarter', target: '{0} je minulé čtvrtletí' },
    { source: '{0} is not last quarter', target: '{0} není minulé čtvrtletí' },

    { source: 'is Last Year', target: 'je minulý rok' },
    { source: 'last year', target: 'minulý rok' },
    { source: 'is not last year', target: 'není minulý rok' },
    { source: '{0} is last year', target: '{0} je minulý rok' },
    { source: '{0} is not last year', target: '{0} není minulý rok' },

    { source: 'is Last X Days', target: 'je posledních X dní' },
    { source: 'last X days', target: 'posledních X dní' },
    { source: 'is not last X days', target: 'není posledních X dní' },
    { source: '{0} is last {1} days', target: '{0} je posledních {1} dní' },
    { source: '{0} is not last {1} days', target: '{0} není posledních {1} dní' },

    { source: 'is Current Week', target: 'je aktuální týden' },
    { source: 'current week', target: 'aktuální týden' },
    { source: 'is not current week', target: 'není aktuální týden' },
    { source: '{0} is current week', target: '{0} je aktuální týden' },
    { source: '{0} is not current week', target: '{0} není aktuální týden' },

    { source: 'is Current Month', target: 'je aktuální měsíc' },
    { source: 'current month', target: 'aktuální měsíc' },
    { source: 'is not current month', target: 'není aktuální měsíc' },
    { source: '{0} is current month', target: '{0} je aktuální měsíc' },
    { source: '{0} is not current month', target: '{0} není aktuální měsíc' },

    { source: 'is Current Quarter', target: 'je aktuální čtvrtletí' },
    { source: 'current quarter', target: 'aktuální čtvrtletí' },
    { source: 'is not current quarter', target: 'není aktuální čtvrtletí' },
    { source: '{0} is current quarter', target: '{0} je aktuální čtvrtletí' },
    { source: '{0} is not current quarter', target: '{0} není aktuální čtvrtletí' },

    { source: 'is Current Year', target: 'je aktuální rok' },
    { source: 'current year', target: 'aktuální rok' },
    { source: 'is not current year', target: 'není aktuální rok' },
    { source: '{0} is current year', target: '{0} je aktuální rok' },
    { source: '{0} is not current year', target: '{0} není aktuální rok' },

    { source: 'is Previous Week', target: 'je předchozí týden' },
    { source: 'previous week', target: 'předchozí týden' },
    { source: 'is not previous week', target: 'není předchozí týden' },
    { source: '{0} is previous week', target: '{0} je předchozí týden' },
    { source: '{0} is not previous week', target: '{0} není předchozí týden' },

    { source: 'is Previous Month', target: 'je předchozí měsíc' },
    { source: 'previous month', target: 'předchozí měsíc' },
    { source: 'is not previous month', target: 'není předchozí měsíc' },
    { source: '{0} is previous month', target: '{0} je předchozí měsíc' },
    { source: '{0} is not previous month', target: '{0} není předchozí měsíc' },

    { source: 'is Previous Quarter', target: 'je předchozí čtvrtletí' },
    { source: 'previous quarter', target: 'předchozí čtvrtletí' },
    { source: 'is not previous quarter', target: 'není předchozí čtvrtletí' },
    { source: '{0} is previous quarter', target: '{0} je předchozí čtvrtletí' },
    { source: '{0} is not previous quarter', target: '{0} není předchozí čtvrtletí' },

    { source: 'is Previous Year', target: 'je předchozí rok' },
    { source: 'previous year', target: 'předchozí rok' },
    { source: 'is not previous year', target: 'není předchozí rok' },
    { source: '{0} is previous year', target: '{0} je předchozí rok' },
    { source: '{0} is not previous year', target: '{0} není předchozí rok' },

    { source: 'is Previous X Days', target: 'je předchozích X dní' },
    { source: 'previous X days', target: 'předchozích X dní' },
    { source: 'is not previous X days', target: 'není předchozích X dní' },
    { source: '{0} is previous {1} days', target: '{0} je předchozích {1} dní' },
    { source: '{0} is not previous {1} days', target: '{0} není předchozích {1} dní' },

    { source: 'is empty', target: 'je prázdné' },
    { source: 'is not empty', target: 'není prázdné' },
    { source: '{0} is empty', target: '{0} je prázdné' },
    { source: '{0} is not empty', target: '{0} není prázdné' },

    { source: 'covered by', target: 'pokryto' },
    { source: 'is not covered by', target: 'není pokryto' },
    { source: '{0} covered by {1}', target: '{0} pokryto {1}' },
    { source: '{0} is not covered by {1}', target: '{0} není pokryto {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nebyly nalezeny žádné aktivity' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Začněte pracovat s daty pro záznam aktivit.'
    },
    { source: 'All Activity', target: 'Veškerá aktivita' },
    { source: 'Create Record', target: 'Vytvořit záznam' },
    { source: 'Update Record', target: 'Aktualizovat záznam' },
    { source: 'Delete Record', target: 'Smazat záznam' },
    { source: 'All Members', target: 'Všichni členové' },

    // Collaboration
    { source: 'Timeline', target: 'Časová osa' },
    { source: 'Messages', target: 'Zprávy' },
    { source: 'Activity', target: 'Aktivita' },
    { source: 'Start chatting with your team', target: 'Začněte chatovat se svým týmem' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Zanechte zprávu o aktuální stránce pro sledování důležitých informací.'
    },
    { source: 'Your Message', target: 'Vaše zpráva' },
    { source: 'Send', target: 'Odeslat' },

    // Share
    { source: 'Invite members', target: 'Pozvat členy' },
    { source: 'Public share', target: 'Veřejné sdílení' },
    { source: 'Sign Up', target: 'Zaregistrovat se' },
    { source: 'Members', target: 'Členové' },
    { source: 'Invite with Email', target: 'Pozvat e-mailem' },
    { source: 'Invite someone...', target: 'Pozvat někoho...' },
    { source: 'Send Invite', target: 'Odeslat pozvánku' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Omezte přístup k vašim datům pomocí vlastností uživatele'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Zadejte e-mail uživatele, kterého chcete pozvat ke spolupráci.'
    },
    { source: 'Copy', target: 'Kopírovat' },
    { source: 'Invite with Link', target: 'Pozvat odkazem' },
    { source: 'Remove link', target: 'Odstranit odkaz' },
    { source: 'Add Invite Link', target: 'Přidat pozvánkový odkaz' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Kdokoli na internetu s tímto odkazem se bude moci připojit k vybranému týmu.'
    },
    { source: 'Pending Invites', target: 'Čekající pozvánky' },
    { source: 'Cancel invite', target: 'Zrušit pozvánku' },
    { source: 'Active Members', target: 'Aktivní členové' },
    { source: 'Remove member', target: 'Odebrat člena' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Nastavujete sdílení pro aktuální stránku'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Nastavujete sdílení pro všechny stránky vaší aplikace.'
    },
    { source: 'Public access link', target: 'Odkaz na veřejný přístup' },
    { source: 'Updating public access...', target: 'Aktualizuji veřejný přístup...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Kdokoli s tímto odkazem bude moci zobrazit aktuální stránku. Tímto způsobem můžete také vložit aktuální stránku na jinou webovou stránku.'
    },
    { source: 'Embed code (IFRAME)', target: 'Vložit kód (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Vložte tento kód do HTML kódu vašeho webu tam, kde chcete, aby se zobrazila aktuální stránka.'
    },
    { source: 'link', target: 'odkaz' },
    { source: 'invited', target: 'pozván' },
    { source: 'Choose Team', target: 'Vyberte tým' },
    { source: 'App Teams', target: 'Týmy aplikace' },
    { source: 'Built-In Teams', target: 'Vestavěné týmy' },
    { source: 'Clear Team', target: 'Vymazat tým' },
    { source: 'Can build application and modify data', target: 'Může vytvářet aplikace a upravovat data' },
    { source: 'Can modify data in application', target: 'Může upravovat data v aplikaci' },
    { source: 'Can only view data without modification', target: 'Může pouze prohlížet data bez úprav' },
    { source: 'Add Team', target: 'Přidat tým' },
    { source: 'Edit Team', target: 'Upravit tým' },
    { source: 'Adding Team', target: 'Přidávání týmu' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Udržujte kontrolu nad tím, kdo má přístup k aktuální aplikaci'
    },
    { source: 'Enter Team Name', target: 'Zadejte název týmu' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Zadejte název týmu, např.: Podpora, Prodej, Marketing atd.'
    },
    { source: 'Add a new member to this team.', target: 'Přidat nového člena do tohoto týmu.' },
    { source: 'Invite new member', target: 'Pozvat nového člena' },
    { source: 'User', target: 'Uživatel' },
    { source: 'Date Added', target: 'Datum přidání' },
    { source: 'You', target: 'Vy' },
    { source: 'Edit', target: 'Upravit' },
    { source: 'No users in this team', target: 'V tomto týmu nejsou žádní uživatelé' },
    { source: 'Page Permissions', target: 'Oprávnění stránky' },
    { source: 'App Permissions', target: 'Oprávnění aplikace' },
    { source: 'Properties', target: 'Vlastnosti' },
    { source: 'Page name', target: 'Název stránky' },
    { source: 'Access', target: 'Přístup' },
    { source: 'Full Access', target: 'Plný přístup' },
    { source: 'Read Only', target: 'Pouze čtení' },
    { source: 'No Access', target: 'Bez přístupu' },
    { source: 'Read', target: 'Číst' },
    { source: 'Update', target: 'Aktualizovat' },
    { source: 'Write', target: 'Zapisovat' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Smazat' },
    { source: 'Custom Access', target: 'Vlastní přístup' },
    { source: 'Read, create, update and delete data', target: 'Číst, vytvářet, aktualizovat a mazat data' },
    { source: 'Choose allowed operations granularly', target: 'Vyberte povolené operace podrobně' },
    { source: 'Without any access to data', target: 'Bez jakéhokoli přístupu k datům' },
    { source: 'Name', target: 'Název' },
    { source: 'Active', target: 'Aktivní' },
    { source: 'Settings', target: 'Nastavení' },
    { source: 'Members and Teams', target: 'Členové a týmy' },
    { source: 'App Builder', target: 'Tvorba aplikací' },
    { source: 'Collection Permissions', target: 'Oprávnění kolekce' },
    { source: "Grant permissions to app's collection", target: 'Přidělit oprávnění kolekci aplikace' },
    { source: 'Collection', target: 'Kolekce' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Omezte přístup k vašim datům pomocí vlastností týmu'
    },
    { source: 'Cancel', target: 'Zrušit' },
    { source: 'Save Team', target: 'Uložit tým' },
    { source: 'Create Team', target: 'Vytvořit tým' },
    { source: 'Value', target: 'Hodnota' },
    { source: 'No properties specified', target: 'Nejsou uvedeny žádné vlastnosti' },

    // Navigation
    { source: 'Current App', target: 'Aktuální aplikace' },
    { source: 'Home', target: 'Domů' },

    // Profile
    { source: 'Loading', target: 'Načítání' },
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Načítáme údaje uživatele, prosím, čekejte...'
    },
    { source: 'Profile Settings', target: 'Nastavení profilu' },
    { source: 'Basic information about your account.', target: 'Základní informace o vašem účtu.' },
    { source: 'Photo', target: 'Fotografie' },
    { source: 'your photo', target: 'vaše fotografie' },
    { source: 'Change', target: 'Změnit' },
    { source: 'Upload', target: 'Nahrát' },
    { source: 'First Name', target: 'Jméno' },
    { source: 'Last Name', target: 'Příjmení' },
    { source: 'Your Email', target: 'Váš e-mail' },
    { source: 'Password Change', target: 'Změna hesla' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Heslo by mělo být dostatečně silné, aby ochránilo váš účet, takže ho vytvořte alespoň 12 znaků dlouhé.'
    },
    { source: 'Current Password', target: 'Aktuální heslo' },
    { source: 'New Password', target: 'Nové heslo' },
    { source: 'Confirm New Password', target: 'Potvrdit nové heslo' },
    { source: 'Change Password', target: 'Změnit heslo' },
    { source: 'Personal Preferences', target: 'Osobní předvolby' },
    { source: 'Language', target: 'Jazyk' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Přizpůsobte si další předvolby pro svůj účet.'
    },
    { source: 'News & Proposals', target: 'Novinky a návrhy' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Přihlaste se k odběru našich aktualizací a návrhů.'
    },
    { source: 'Save changes', target: 'Uložit změny' },

    // My Apps
    { source: 'Type to search...', target: 'Začněte psát pro hledání...' },
    { source: 'My Apps', target: 'Moje aplikace' },
    { source: 'New App', target: 'Nová aplikace' },
    { source: 'Builder', target: 'Tvůrce' },
    { source: 'App', target: 'Aplikace' },
    { source: 'continue install', target: 'pokračovat v instalaci' },
    { source: 'Open builder', target: 'Otevřít tvůrce' },
    { source: 'View published', target: 'Zobrazit publikované' },
    { source: 'Delete App', target: 'Smazat aplikaci' },
    { source: 'Start from a template', target: 'Začít ze šablony' },
    { source: 'Preview', target: 'Náhled' },
    { source: 'Contact Support', target: 'Kontaktovat podporu' },
    { source: 'Documentation', target: 'Dokumentace' },
    { source: 'Feature Requests', target: 'Požadavky na funkce' },
    { source: 'See What’s New', target: 'Zobrazit novinky' },
    { source: 'Search templates...', target: 'Hledat šablony...' },
    { source: 'any', target: 'jakýkoli' },
    { source: 'more', target: 'více' },
    { source: 'Choose Data Source', target: 'Vyberte zdroj dat' },
    { source: 'works with 30+ data sources', target: 'funguje s více než 30 zdroji dat' },
    { source: 'Use this template', target: 'Použít tuto šablonu' },
    { source: 'stores data in Jet Tables', target: 'ukládá data v Jet Tables' },
    { source: 'New Data', target: 'Nová data' },
    { source: 'using {0}', target: 'používá {0}' },
    { source: "Can't find resource you're looking for?", target: 'Nemůžete najít požadovaný zdroj?' },
    { source: 'Admin Panel', target: 'Administrační panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Operace seznamu, vytváření a aktualizace (CRUD) nad vašimi daty'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Vytvořte vlastní administrační panel na základě jakýchkoli databází, aplikací a API, jako jsou Stripe, Twilio a GraphQL.'
    },
    { source: 'All Integrations', target: 'Všechny integrace' },
    { source: 'Databases', target: 'Databáze' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Frameworky' },
    { source: 'Storages', target: 'Úložiště' },

    // Sign In
    { source: 'Please wait...', target: 'Prosím, čekejte...' },
    { source: 'Good morning', target: 'Dobré ráno' },
    { source: 'Good afternoon', target: 'Dobré odpoledne' },
    { source: 'Good evening', target: 'Dobrý večer' },
    { source: 'Sign In', target: 'Přihlásit se' },
    { source: 'Welcome Back.', target: 'Vítejte zpět.' },
    { source: 'Sign in with {0}', target: 'Přihlásit se pomocí {0}' },
    { source: 'or login with', target: 'nebo přihlásit se pomocí' },
    { source: 'Enter E-mail', target: 'Zadejte e-mail' },
    { source: 'Enter password', target: 'Zadejte heslo' },
    { source: 'Login', target: 'Přihlásit se' },
    { source: 'Create new account', target: 'Vytvořit nový účet' },
    { source: 'Forgot my password', target: 'Zapomenuté heslo' },
    { source: 'required', target: 'povinné' },
    { source: 'incorrect Email', target: 'nesprávný e-mail' },
    { source: 'Minimum password length {0}', target: 'Minimální délka hesla {0}' },
    { source: 'Unable to Sign In', target: 'Nelze se přihlásit' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Začněte <span class="auth-form__accent">zdarma ještě dnes</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Není vyžadována žádná karta. Během 14denní zkušební verze PRO získáte veškeré pokročilé funkce zdarma.'
    },
    { source: 'or', target: 'nebo' },
    { source: 'Enter First Name', target: 'Zadejte jméno' },
    { source: 'Enter Last Name (optional)', target: 'Zadejte příjmení (volitelné)' },
    { source: 'Enter Email', target: 'Zadejte e-mail' },
    { source: 'Password', target: 'Heslo' },
    { source: 'Repeat Password', target: 'Zopakujte heslo' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Přihlášením souhlasíte s našimi'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Vytvořením účtu souhlasíte s našimi'
    },
    { source: 'Terms of Service', target: 'Podmínkami služby' },
    { source: 'Privacy Policy', target: 'Zásadami ochrany osobních údajů' },
    { source: 'and', target: 'a' },
    { source: 'Create your free account', target: 'Vytvořte si svůj bezplatný účet' },
    { source: 'Already have an account', target: 'Už máte účet' },
    { source: 'Unable to Sign Up', target: 'Nelze se zaregistrovat' },

    // Restore password
    { source: 'Reset your password', target: 'Obnovte své heslo' },
    { source: 'Email Address', target: 'E-mailová adresa' },
    { source: 'Reset password', target: 'Obnovit heslo' },
    { source: 'Return to Sign In', target: 'Zpět na přihlášení' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Zkontrolujte prosím svůj e-mail – <strong>{0}</strong>. Poslali jsme vám validační odkaz, který byste měli následovat pro změnu hesla.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target:
        'Skoro hotovo, stačí níže zadat své nové heslo. <br> Musí mít alespoň 8 znaků.'
    },
    { source: 'Reset password & Sign In', target: 'Obnovit heslo a přihlásit se' },
    { source: 'Unable to Send Code', target: 'Nelze odeslat kód' },
    { source: 'Unable to Change Password', target: 'Nelze změnit heslo' },

    // Users & Teams
    { source: 'Members of {0}', target: 'Členové {0}' },
    { source: 'How to get started', target: 'Jak začít' },
    { source: 'Users API', target: 'API uživatelů' },
    { source: 'Teams API', target: 'API týmů' },
    { source: 'Invite Member', target: 'Pozvat člena' },
    { source: 'Add User property', target: 'Přidat vlastnost uživatele' },
    { source: 'Add Team property', target: 'Přidat vlastnost týmu' },
    { source: 'Add', target: 'Přidat' },
    { source: 'Edit property', target: 'Upravit vlastnost' },
    { source: 'Delete property', target: 'Smazat vlastnost' },
    { source: 'Users', target: 'Uživatelé' },
    { source: 'Teams', target: 'Týmy' },
    { source: 'Search members', target: 'Hledat členy' },
    { source: 'Search teams', target: 'Hledat týmy' },
    { source: '{0} pages', target: '{0} stránek' },
    { source: 'No members', target: 'Žádní členové' }
  ]
};
