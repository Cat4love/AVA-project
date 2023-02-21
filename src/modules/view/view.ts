import State from '../state.ts/editorState';

class View {
  public render(): void {
    console.log('render view');
    this.renderBodyContent();
    this.setTheme();
  }

  private renderBodyContent(): void {
    // const bodyContent = `<div class="wrapper"></div>
    // <header class="header wide-container">
    //   <div class="header-content">
    //     <p class="logo"><span class="logo-highlighted">AVA</span>editor.</p>
    //     <div class="user-content">
    //       <button class="button login-btn">Sign In / Sign Up</button>
    //       <button class="button profile-btn hidden">User Profile</button>
    //       <div class="settings"></div>
    //       <div class="settings-menu hidden">
    //         <h3 class="settings-title">Settings</h3>
    //         <ul class="settings-list">
    //           <li class="settings-item theme-item">
    //             <span>Dark Theme</span>
    //             <div class="toggle-wrap">
    //               <input class="theme-checkbox" type="checkbox" id="theme" />
    //               <label class="theme-label" for="theme"></label>
    //             </div>
    //           </li>
    //           <li class="settings-item lang-choice-item">
    //             <span>Language</span>
    //             <div class="lang-choice">
    //               <label class="lang-wrap selected">
    //                 <input class="radio-check" type="radio" />
    //                 <span class="lang-btn">English</span>
    //               </label>
    //               <label class="lang-wrap">
    //                 <input class="radio-check" type="radio" />
    //                 <span class="lang-btn">Russian</span>
    //               </label>
    //             </div>
    //           </li>
    //         </ul>
    //         <div class="settings-arrow"></div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    // <main class="main wide-container">
    //   <div class="system-modal">
    //     <div class="close-system-modal"></div>
    //     <div class="system-text"></div>
    //   </div>
    //   <div class="login">
    //     <div class="login-modal">
    //       <div class="close-modal"></div>
    //       <div class="no-account">
    //         <span class="no-account-text">Don’t have an account?</span>
    //         <a class="no-account-link" href="#" id="login">Create Account</a>
    //       </div>
    //       <div class="modal-content">
    //         <h3 class="modal-title">Sign in for more options</h3>
    //         <div class="modal-form">
    //           <div class="modal-input-wrap user-name-wrap hidden">
    //             <label class="modal-label">User Name</label>
    //             <input class="modal-input" type="text" id="user-name">
    //             <p class="modal-message user-message"></p>
    //           </div>
    //           <div class="modal-input-wrap">
    //             <label class="modal-label modal-email-label">Email / User Name</label>
    //             <input class="modal-input" type="email" id="email">
    //             <p class="modal-message email-message"></p>
    //           </div>
    //           <div class="modal-input-wrap">
    //             <label class="modal-label" for="password">Password</label>
    //             <input class="modal-input" type="password" id="password">
    //             <p class="modal-message password-message"></p>
    //           </div>
    //           <div class="modal-input-wrap confirm-psw-wrap hidden">
    //             <label class="modal-label" for="confirm-psw">Confirm Password</label>
    //             <input class="modal-input" type="password" id="confirm-psw">
    //             <p class="modal-message confirm-password-message"></p>
    //           </div>
    //           <div class="modal-buttons-wrap">
    //             <button class="button modal-btn modal-login-btn" id="sign-in">Sign In</button>
    //             <button class="button modal-btn modal-create-btn hidden" id="sign-up">Sign Up</button>
    //             <button class="button modal-btn modal-login-google-btn" id="sign-in-google">Sign In with Google</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <img id="sourceImage" />
    //   <img id="defaultImage" />
    //   <h1 class="hidden">AVAeditor - online tool for editing photos and images</h1>
    //   <div class="main-content">
    //     <div class="upload-area" id="uploadArea">
    //       <p class="upload-slogan">Upload your photo by dragging it or clicking the Upload button</p>
    //       <div class="image-placeholder"></div>
    //       <button class="button upload-btn">Upload Image</button>
    //       <input id="fileInput" type="file" accept="image/*" hidden />
    //     </div>
    //     <div class="edit-area hidden">
    //       <div class="undo-controls">
    //         <button class="button reset-btn">Reset All Changes</button>
    //         <button class="button undo-btn">Undo</button>
    //         <button class="button redo-btn">Redo</button>
    //       </div>
    //       <div class="zoom-controls">
    //         <div class="remove-zoom"></div>
    //         <div class="zoom-info">
    //           <span class="zoom-desc">Zoom</span>
    //           <span class="zoom-value">100%</span>
    //         </div>
    //         <div class="add-zoom"></div>
    //       </div>
    //       <div class="load-controls">
    //         <button class="button download-btn">Download</button>
    //         <div class="download-menu hidden">
    //           <h3 class="download-title">Download Options</h3>
    //           <ul class="download-list">
    //             <li class="download-item format-choice-item">
    //               <div class="format-choice">
    //                 <label class="format-wrap selected" id="png">
    //                   <input class="format-check" type="radio" />
    //                   <span class="format-btn">Png</span>
    //                 </label>
    //                 <label class="format-wrap" id="jpeg">
    //                   <input class="format-check" type="radio" />
    //                   <span class="format-btn">Jpeg</span>
    //                 </label>
    //                 <label class="format-wrap" id="webp">
    //                   <input class="format-check" type="radio" />
    //                   <span class="format-btn">Webp</span>
    //                 </label>
    //               </div>
    //             </li>
    //             <li class="download-item quality-item disabled">
    //               <p class="quality-text">Image Quality<span class="quality-note">Available for JPEG only</span></p>
    //               <div class="quality-content">
    //                 <div class="quality-range-wrapper">
    //                   <input class="quality-range-input" disabled type="range" min="1" step="1" value="100" />
    //                 </div>
    //                 <div class="quality-input-wrap">
    //                   <input class="quality-number-input" type="number" min="1" step="1" value="100" maxlength="3" disabled />
    //                   <span class="quality-percentage-sign">%</span>
    //                 </div>
    //               </div>
    //             </li>
    //           </ul>
    //           <div class="download-buttons-wrap">
    //             <button class="reset-download-btn">Reset</button>
    //             <button class="apply-download-btn">Apply</button>
    //           </div>
    //           <div class="download-arrow"></div>
    //         </div>
    //         <button class="button delete-btn">Delete Image</button>
    //       </div>
    //       <canvas id="canvas" height="0" class="image-canvas" crossorigin="anonymous" draggable="false"></canvas>
    //       <canvas id="canvas2" height="0" crossorigin="anonymous" draggable="false"></canvas>
    //       <div id="selection-tool" style="border: 2px dashed #00d0c3">
    //         <span style="color: #00d0c3" id="selection-tool-height">0</span>
    //         <span style="color: #00d0c3" id="selection-tool-width">0</span>
    //       </div>
    //       <div class="edit-tools">
    //         <ul class="edit-tools-list">
    //           <li class="tool-item transform-tool" id="transform">
    //             Transform
    //             <ul class="options-list transform-list hidden" id="transform-list">
    //               <li class="edit-option" id="crop">Crop</li>
    //               <li class="edit-option" id="resize">Resize</li>
    //               <li class="edit-option" id="rotate">Flip and Rotate</li>
    //             </ul>
    //             <div class="option-controls resize-option-controls">
    //               <div class="resize-controls hidden">
    //                 <div class="back-arrow" id="resize-arrow"></div>
    //                 <div class="controls-content">
    //                   <span class="option-title">Resize</span>
    //                   <div class="size-wrap">
    //                     <input class="option-input resize-input" type="text" id="width-input" placeholder="Width" min="0"
    //                       maxlength="4" value="912" />
    //                     <div class="proportions locked"></div>
    //                     <input class="option-input resize-input" type="text" id="height-input" placeholder="Height" min="0"
    //                       maxlength="4" value="510" />
    //                   </div>
    //                   <button class="done-btn" disabled></button>
    //                 </div>
    //               </div>
    //               <div class="rotate-controls hidden">
    //                 <div class="back-arrow" id="rotate-arrow"></div>
    //                 <div class="controls-content">
    //                   <span class="option-title">Flip and Rotate</span>
    //                   <div class="flip-vert" id="flip-vert"></div>
    //                   <div class="flip-hor" id="flip-hor"></div>
    //                   <div class="rotate-left" id="rotate-left"></div>
    //                   <div class="rotate-right" id="rotate-right"></div>
    //                 </div>
    //               </div>
    //               <div class="crop-controls hidden">
    //                 <div class="back-arrow" id="crop-arrow"></div>
    //                 <div class="controls-content">
    //                   <span class="option-title">Crop</span>
    //                   <div class="crop-wrap">
    //                     <input class="crop-input" type="color" id="crop-color-input" value="#00d0c3" />
    //                     <div class="custom-wrap">
    //                       <span class="crop-text">Custom</span>
    //                       <div class="crop-icon"></div>
    //                     </div>
    //                   </div>
    //                   <button id="crop-done" class="crop-done-btn" disabled></button>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //           <li class="tool-item filters-tool" id="filters">
    //             Filters
    //             <div class="option-controls filter-option-controls">
    //               <div class="filters-message hidden"></div>
    //               <div class="filters-controls filters-list hidden" id="filters-list">
    //                 <div class="filter-wrap">
    //                   <div class="filter no-filter selected">
    //                     <span class="filter-title">No Filter</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap">
    //                   <div style="
    //                                               background-color: rgba(243, 106, 188, 0.3);
    //                                               filter: brightness(110%) contrast(110%) saturate(130%);
    //                                             " class="filter filter-one">
    //                     <span class="filter-title">1977</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap">
    //                   <div style="
    //                                               background-color: rgba(62, 162, 253, 0.5);
    //                                               filter: brightness(120%) contrast(90%) saturate(85%) hue-rotate(20deg);
    //                                             " class="filter filter-two">
    //                     <span class="filter-title">Aden</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap">
    //                   <div style="
    //                                               background-color: rgba(243, 106, 188, 0.3);
    //                                               filter: brightness(110%) contrast(90%) saturate(150%) hue-rotate(-10deg);
    //                                             " class="filter filter-three">
    //                     <span class="filter-title">Amaro</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap">
    //                   <div style="background-color: rgba(161, 44, 199, 0.31); filter: brightness(120%) sepia(50%)"
    //                     class="filter filter-four">
    //                     <span class="filter-title">Brannan</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap user-filter">
    //                   <div style="background-color: rgba(168, 223, 193, 0.4); filter: brightness(110%) contrast(90%)"
    //                     class="filter filter-five">
    //                     <span class="filter-title">Brooklyn</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap user-filter">
    //                   <div style="background-color: rgba(127, 187, 227, 0.2); filter: contrast(120%) saturate(125%)"
    //                     class="filter filter-six">
    //                     <span class="filter-title">Clarendon</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap user-filter">
    //                   <div style="background: rgba(208, 186, 142, 0.5); filter: contrast(90%) sepia(20%)" class="filter filter-seven">
    //                     <span class="filter-title">Earlybird</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap user-filter">
    //                   <div style="background-color: rgba(66, 10, 14, 0.2); filter: brightness(105%) hue-rotate(350deg)"
    //                     class="filter filter-eight">
    //                     <span class="filter-title">Gingham</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap user-filter">
    //                   <div style="
    //                                               background-color: rgba(255, 177, 166, 0.5);
    //                                               filter: brightness(120%) contrast(90%) saturate(110%);
    //                                             " class="filter filter-nine">
    //                     <span class="filter-title">Hudson</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap premium-filter">
    //                   <div style="
    //                                               background-color: rgba(0, 0, 0, 0);
    //                                               filter: brightness(110%) contrast(110%) sepia(30%) grayscale(100%);
    //                                             " class="filter filter-ten">
    //                     <span class="filter-title">Inkwell</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap premium-filter">
    //                   <div style="background-color: rgba(255, 101, 80, 0.4); filter: contrast(150%) saturate(110%)"
    //                     class="filter filter-eleven">
    //                     <span class="filter-title">Lofi</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap premium-filter">
    //                   <div style="
    //                                               background-color: rgba(3, 230, 26, 0.2);
    //                                               filter: brightness(95%) contrast(95%) sepia(25%) saturate(150%);
    //                                             " class="filter filter-twelve">
    //                     <span class="filter-title">Maven</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap premium-filter">
    //                   <div style="background-color: rgba(86, 22, 214, 0.5)" class="filter filter-thirteen">
    //                     <span class="filter-title">Perpetua</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap premium-filter">
    //                   <div style="
    //                                               background-color: rgba(173, 205, 239, 0.5);
    //                                               filter: brightness(110%) contrast(85%) sepia(22%) saturate(75%);
    //                                             " class="filter filter-fourteen">
    //                     <span class="filter-title">Reyes</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap premium-filter">
    //                   <div style="
    //                                               background-color: rgba(240, 149, 128, 0.2);
    //                                               filter: brightness(115%) contrast(75%) saturate(85%);
    //                                             " class="filter filter-fifteen">
    //                     <span class="filter-title">Stinson</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap premium-filter">
    //                   <div style="
    //                                               background-color: rgba(125, 0, 247, 0.4);
    //                                               filter: brightness(110%) contrast(110%) sepia(30%);
    //                                             " class="filter filter-sixteen">
    //                     <span class="filter-title">Toaster</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap premium-filter">
    //                   <div style="
    //                                               background-color: rgba(0, 227, 217, 0.4);
    //                                               filter: brightness(110%) saturate(160%) sepia(30%) hue-rotate(350);
    //                                             " class="filter filter-seventeen">
    //                     <span class="filter-title">Walden</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap premium-filter">
    //                   <div style="background-color: rgba(58, 3, 57, 0.6); filter: brightness(108%) contrast(108%) sepia(8%)"
    //                     class="filter filter-eighteen">
    //                     <span class="filter-title">Valencia</span>
    //                   </div>
    //                 </div>
    //                 <div class="filter-wrap premium-filter">
    //                   <div style="background-color: rgba(74, 25, 8, 0.5); filter: sepia(30%)" class="filter filter-nineteen">
    //                     <span class="filter-title">Xpro2</span>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //           <li class="tool-item adjustments-tool" id="adjustments">
    //             Adjustments
    //             <ul class="options-list adjustments-list hidden" id="adjustments-list">
    //               <li class="edit-option" id="blur">Blur</li>
    //               <li class="edit-option" id="brightness">Brightness</li>
    //               <li class="edit-option" id="contrast">Contrast</li>
    //               <li class="edit-option" id="grayscale">Grayscale</li>
    //               <li class="edit-option" id="hue">Hue</li>
    //               <li class="edit-option" id="invert">Invert</li>
    //               <li class="edit-option" id="opacity">Opacity</li>
    //               <li class="edit-option" id="saturation">Saturation</li>
    //               <li class="edit-option" id="sepia">Sepia</li>
    //             </ul>
    //             <div class="option-controls adjustments-option-controls">
    //               <div class="adjustments-controls hidden">
    //                 <div class="back-arrow" id="adjustments-arrow"></div>
    //                 <div class="controls-content">
    //                   <span class="option-title adjust-title">Adjustments</span>
    //                   <div class="range-wrapper">
    //                     <input class="adjust-range-input" type="range" min="0" step="1" value="0" />
    //                   </div>
    //                   <div class="percentage-input-wrap">
    //                     <input class="option-input adjust-number-input" type="number" min="0" step="1" value="0"
    //                       maxlength="3" />
    //                     <span class="percentage-sign">%</span>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //           <li class="tool-item text-tool" id="text">Text</li>
    //           <li class="tool-item border-tool" id="border">Border
    //             <div class="option-controls border-option-controls">
    //               <div class="border-controls border-list hidden" id="border-list">
    //                 <div class="back-arrow" id="border-arrow"></div>
    //                 <div class="controls-content">
    //                   <span class="option-title">Border</span>
    //                   <div class="border-wrap">
    //                     <input class="border-input" type="color" id="border-color-input" value="#00d0c3" />
    //                     <div class="width-wrap">
    //                       <div class="width-icon"></div>
    //                       <div class="width-input-wrap">
    //                         <input class="option-input width-number-input" id="border-width" type="number" min="0" step="5" value="10"
    //                           maxlength="2" />
    //                         <span class="width-sign">px</span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <button class="border-done-btn"></button>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //           <li class="tool-item draw-tool" id="draw">Draw
    //             <div class="option-controls draw-option-controls">
    //               <div class="draw-controls draw-list hidden" id="draw-list">
    //                 <div class="back-arrow" id="draw-arrow"></div>
    //                 <div class="controls-content">
    //                   <span class="option-title">Draw</span>
    //                   <div class="draw-wrap">
    //                     <input class="draw-input" type="color" id="draw-color-input" value="#00d0c3" />
    //                     <div class="width-wrap">
    //                       <div class="width-icon"></div>
    //                       <div class="width-input-wrap">
    //                         <input class="option-input width-number-input"  id="draw-width" type="number" min="0" step="5" value="10"
    //                           maxlength="2" />
    //                         <span class="width-sign">px</span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <button class="draw-done-btn"></button>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="profile-page-wrapper hidden">
    //     <ul class="profile-nav-list">
    //       <li class="nav-item account-item selected">User Account</li>
    //       <li class="nav-item premium-item">Get Premium</li>
    //       <li class="nav-item sign-out-item">Sign Out</li>
    //     </ul>
    //     <div class="profile-page-content">
    //       <div class="user-account-content">
    //         <button class="button return-btn">Back to Editor</button>
    //         <h2 class="profile-title">User Account</h2>
    //         <div class="user-info">
    //           <h3 class="info-title">User Info</h3>
    //           <div class="info-form">
    //             <div class="info-input-wrap">
    //               <div class="info-input-content">
    //                 <label class="info-label">User Name</label>
    //                 <input class="info-input" type="text" id="info-user-name">
    //                 <p class="info-message info-user-message"></p>
    //               </div>
    //               <button class="save-changes-btn hidden" id="save-username">Save Changes</button>
    //             </div>
    //             <div class="info-input-wrap">
    //               <div class="info-input-content">
    //                 <label class="info-label modal-email-label">Email</label>
    //                 <input class="info-input" type="email" id="info-email">
    //                 <p class="info-message info-email-message"> </p>
    //               </div>
    //               <button class="save-changes-btn hidden" id="save-email">Save Changes</button>
    //               </div>
    //               <div class="change-password-wrap">
    //                 <button class="change-password-btn" id="change-password">Change Password</button>
    //                 <h3 class="change-password-title hidden">Change Password</h3>
    //               </div>
    //               <div class="info-password-content hidden">
    //                 <div class="info-input-content">
    //                   <label class="info-label">Old Password</label>
    //                   <input class="change-password-input" type="password" id="old-password">
    //                   <p class="info-message info-password-message"> </p>
    //                 </div>
    //                 <div class="info-input-content">
    //                   <label class="info-label">New Password</label>
    //                   <input class="change-password-input" type="password" id="new-password">
    //                   <p class="info-message info-password-message"> </p>
    //                 </div>
    //                 <div class="info-input-content">
    //                   <label class="info-label">Confirm New Password</label>
    //                   <input class="change-password-input" type="password" id="confirm-new-password">
    //                   <p class="info-message info-password-message"> </p>
    //                 </div>
    //                 <button class="update-password-btn hidden">Update Password</button>
    //               </div>
    //               </div>
    //         </div>
    //         <div class="manage-account">
    //           <h3 class="info-title">Manage Account</h3>
    //           <p class="manage-text">Here you can delete all user data and your account</p>
    //           <button class="delete-account-btn" id="delete-account">Delete Account</button>
    //           <div class="info-input-wrap confirm-deletion-wrap hidden">
    //             <div class="info-input-content">
    //               <label class="info-label">Password</label>
    //               <input class="confirm-deletion-input" type="password" placeholder="Please enter your password to confirm deletion">
    //               <p class="info-message delete-account-message"> </p>
    //             </div>
    //             <button class="confirm-deletion-btn" id="confirm-deletion">Delete Account</button>
    //             </div>
    //         </div>
    //       </div>
    //       <div class="get-premium-content">
    //         <button class="button return-btn">Back to Editor</button>
    //         <h2 class="profile-title">Get Premium</h2>
    //         <div class="premium-banner"></div>
    //         <div class="buy-premium-content">
    //           <p class="premium-text">Enter <span class="premium-text highlighted">RSSchool</span> promo and get your <span class="premium-text uppercase">premium</span> for free!</p>
    //           <div class="info-input-wrap promo-input-wrap">
    //             <div class="info-input-content">
    //               <label class="info-label">Promo</label>
    //               <input class="promo-input" type="text" id="promo" placeholder="Please enter your promo here">
    //               <p class="info-message promo-user-message"></p>
    //             </div>
    //             <button class="get-premium-btn" id="get-premium">Get Premium</button>
    //           </div>
    //         </div>
    //         <div class="already-premium-content hidden">
    //           <p><span class="premium-text uppercase">premium</span> access is already available for you. Enjoy!</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </main>
    // <footer class="footer container">
    //   <div class="footer-content">
    //     <p class="logo"><span class="logo-highlighted">AVA</span>editor.</p>
    //     <ul class="team-list">
    //       <li class="team-item">
    //         <a class="github-link" href="https://github.com/andreiplavinski" target="_blank">andreiplavinski</a>
    //       </li>
    //       <li class="team-item">
    //         <a class="github-link" href="https://github.com/9fogel" target="_blank">9fogel</a>
    //       </li>
    //       <li class="team-item">
    //         <a class="github-link" href="https://github.com/andreizaretski" target="_blank">andreizaretski</a>
    //       </li>
    //     </ul>
    //     <a class="rs-logo" href="https://rs.school/js/" target="_blank"></a>
    //   </div>
    //   <span class="copyright">© 2023 All Rights Reserved</span>
    // </footer>`;
    // document.body.innerHTML = bodyContent;
  }

  private setTheme(): void {
    console.log('установить тему');
    const toggleWrap: HTMLElement | null = document.querySelector('.toggle-wrap');

    State.theme = localStorage.getItem('ava-theme') || 'light';
    if (State.theme === 'light') {
      document.body.classList.remove('dark-theme');
      toggleWrap?.classList.remove('active');
    } else {
      document.body.classList.add('dark-theme');
      toggleWrap?.classList.add('active');
    }
    // if (localStorage.getItem('ava-theme')) {
    //   State.theme = localStorage.getItem('ava-theme');
    // } else {

    // }
  }
}

export default View;