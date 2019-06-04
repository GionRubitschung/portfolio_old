import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../../backend/service/file-download/file.service';
import { File } from '../../../../backend/service/interfaces/file';

@Component({
  selector: 'app-bottom-yeet',
  templateUrl: './bottom-yeet.component.html',
  styleUrls: ['./bottom-yeet.component.css']
})
export class BottomYeetComponent implements OnInit {

  FILES: File[] = [];

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.fileService.getFiles().subscribe(files => {
      this.FILES = files;
    });
  }

  filtereFileees(file: string) {
    this.fileService.filtereFiles(file);
  }

}
