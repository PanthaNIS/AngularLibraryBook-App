import { Component } from '@angular/core';

@Component({

  template: `
    <h3>User Guide</h3>
    
    <p> Hi users, the major aim to develop this page is to give you the important information regarding this application. Thoroughly go through the information provided below.</p>
    <ul>
      <li>User can add the book data by filling out the form available in Add Book button in the tool bar. </li>
      <li>User can update the book information from the database using Update button in the tool bar. </li>
      <li>User can delete the information from the database using Update button in the tool bar and the delete function available in the bottom of the form.</li>
      <li>User can see the temporary database store in the table in Book List button in the above tool bar.</li>
  </ul>
`,
styleUrls:['./add.component.css']
})
export class GuideComponent {

}